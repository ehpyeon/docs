(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(11),l=(n(0),n(242)),r={title:"ReScript and F# for Dark developers"},o={id:"contributing/ocaml-for-dark-developers",isDocsHomePage:!1,title:"ReScript and F# for Dark developers",description:"This guide aims to introduce you to enough F#/ReScript to contribute to Dark,",source:"@site/docs/contributing/ocaml-for-dark-developers.md",permalink:"/contributing/ocaml-for-dark-developers",sidebar:"Contributing",previous:{title:"Adding a refactoring",permalink:"/contributing/adding-a-refactoring"},next:{title:"General concepts",permalink:"/contributing/general-concepts"}},c=[{value:"Some simple F#/ReScript code",id:"some-simple-frescript-code",children:[]},{value:"Dark vs ReScript vs F#",id:"dark-vs-rescript-vs-f",children:[{value:"Types",id:"types",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Standard library",id:"standard-library",children:[]},{value:"Int",id:"int",children:[]},{value:"Float",id:"float",children:[]},{value:"Bool",id:"bool",children:[]},{value:"String",id:"string",children:[]},{value:"String Interpolation",id:"string-interpolation",children:[]},{value:"List",id:"list",children:[]},{value:"Records",id:"records",children:[]},{value:"Let",id:"let",children:[]},{value:"If",id:"if",children:[]},{value:"Operators",id:"operators",children:[]},{value:"Match",id:"match",children:[]},{value:"Variants",id:"variants",children:[]},{value:"Lambdas",id:"lambdas",children:[]},{value:"Pipes",id:"pipes",children:[]},{value:"Dictionaries",id:"dictionaries",children:[]},{value:"Unit",id:"unit",children:[]},{value:"Error handling",id:"error-handling",children:[]},{value:"Imperative programming",id:"imperative-programming",children:[]},{value:"Advanced functions",id:"advanced-functions",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Classes and Objects",id:"classes-and-objects",children:[]}]},{value:"ReScript vs Bucklescript/ReasonML?",id:"rescript-vs-bucklescriptreasonml",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This guide aims to introduce you to enough F#/ReScript to contribute to Dark,\nassuming you already know Dark. F# and ReScript are very similar languages, both\nderived from OCaml. We currently use ReScript using the OCaml format (","*",".ml\nfiles) for the client. We use F# for the backend, which is very similar to Dark\nas well."),Object(l.b)("h2",{id:"some-simple-frescript-code"},"Some simple F#/ReScript code"),Object(l.b)("p",null,"Dark and F# and ReScript are very similar. Here's an example function in F#:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let someFunction (intArgument : int) : string =\n  let aString = "myString"\n  let anInt = 65 + intArgument\n  let aFloat = 6.72\n  anotherFunction aString anInt aFloat\n')),Object(l.b)("p",null,"This is a function called ",Object(l.b)("inlineCode",{parentName:"p"},"someFunction"),", which takes one argument, an ",Object(l.b)("inlineCode",{parentName:"p"},"int"),"\ncalled ",Object(l.b)("inlineCode",{parentName:"p"},"intArgument"),", and returns a ",Object(l.b)("inlineCode",{parentName:"p"},"string"),". Three variables are defined in the\nbody, first a string, then an int, then a float, and finally we call the\n",Object(l.b)("inlineCode",{parentName:"p"},"anotherFunction")," function with all three parameters as arguments."),Object(l.b)("p",null,"In Dark this would be written:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'someFunction\n  intArgument : Int\n  \u21aa String\n\nlet aString = "myString"\nlet anInt = 65 + intArgument\nlet aFloat = 6.72\nanotherFunction aString anInt aFloat\n')),Object(l.b)("p",null,"In ReScript this would be written (note the ",Object(l.b)("inlineCode",{parentName:"p"},"in")," at the end of each line):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let someFunction (intArgument : int) : string =\n  let aString = "myString" in\n  let anInt = 65 + intArgument in\n  let aFloat = 6.72 in\n  anotherFunction aString anInt aFloat\n')),Object(l.b)("p",null,"As you can see, apart from the function signature, the only difference is that\n",Object(l.b)("inlineCode",{parentName:"p"},"let")," statements in ReScript have an ",Object(l.b)("inlineCode",{parentName:"p"},"in")," at the end of the line."),Object(l.b)("h2",{id:"dark-vs-rescript-vs-f"},"Dark vs ReScript vs F#"),Object(l.b)("p",null,"Dark, ReScript, and F# are all influenced by OCaml. Though Dark is currently a\nsubset of these languages, Dark will continue to grow some more of their\nfeatures. We'll discuss the similarities and differences as we go through\nlanguage features."),Object(l.b)("h3",{id:"types"},"Types"),Object(l.b)("p",null,"ReScript/F# are strongly typed-languages. Dark aspires to be, but it doesn't\nhave a type-checker yet. This shows the biggest difference in between working in\nthese languages, that the compiler will refuse to compile if the types are\nwrong."),Object(l.b)("p",null,"ReScript/F# have type-inference, which means that the compiler will try and\nfigure out what the types are. This is frequently the source of bad compiler\nmessages, often it will tell you something which seems wrong because it guessed\nwrong about certain types."),Object(l.b)("p",null,"Usually type errors actually contain useful information, but they need to be\nread very carefully to find it."),Object(l.b)("p",null,"We've found the best way to debug incorrect types is to add type annotations to\neverything. We add them to all functions (we didn't always do this, but we do\nnow, but we are now), including all parameters and return types (see\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#functions"}),"example")," below)."),Object(l.b)("p",null,"You can actually add types in many places where they aren't required, such as\nvariable definitions:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let y = 6.7 in\nlet (x : int) = 6 in\nx + 5\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"x")," here, despite being a normal variable definition, has a type signature.\nOCaml allows this in many places, and it's useful for tracking down these\nerrors."),Object(l.b)("p",null,"We'll discuss declaring types below."),Object(l.b)("h3",{id:"functions"},"Functions"),Object(l.b)("p",null,"Functions in ReScript and F# are defined in the outer scope. Type signatures are\noptional but we always use them:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let myFunction (arg1 : int) (arg2 : string) : string =\n  if arg1 < (String.toInt arg2)\n  then "just return a string"\n  else arg2\n')),Object(l.b)("p",null,"Here, ",Object(l.b)("inlineCode",{parentName:"p"},"myFunction")," has two arguments, ",Object(l.b)("inlineCode",{parentName:"p"},"arg1")," and ",Object(l.b)("inlineCode",{parentName:"p"},"arg2"),", which are an ",Object(l.b)("inlineCode",{parentName:"p"},"int")," and\n",Object(l.b)("inlineCode",{parentName:"p"},"string")," respectively. It returns a ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"."),Object(l.b)("p",null,"Like in Dark, the body of a function is just an expression, and it automatically\nreturns the result of that expression."),Object(l.b)("p",null,"(see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#advanced-functions"}),"below")," for more details on functions in OCaml)"),Object(l.b)("h3",{id:"standard-library"},"Standard library"),Object(l.b)("p",null,"Most of the code in Dark uses\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/darklang/tablecloth"}),"Tablecloth"),", which has the same\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/darklang/tablecloth/blob/master/bucklescript/src/tablecloth.ml"}),"interface"),"\nfor ReScript and F#."),Object(l.b)("p",null,"Note: for implementing the standard libraries, we do not use Tablecloth as it is\nstill pretty new and may be in flux. Instead, we try to make sure that we use\nlibraries from ",Object(l.b)("inlineCode",{parentName:"p"},".NET"),", FSharp.Core, or if necessary, the FSharpPlus library."),Object(l.b)("h3",{id:"int"},"Int"),Object(l.b)("p",null,"An ",Object(l.b)("inlineCode",{parentName:"p"},"int")," is the same in Dark and OCaml, same syntax, same meaning. Note that\nints are 31 bits in ReScript, 32 bits in F#, and infinite precision in Dark."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = 5 in\nx + 6\n")),Object(l.b)("h3",{id:"float"},"Float"),Object(l.b)("p",null,"A ",Object(l.b)("inlineCode",{parentName:"p"},"float")," is the same in Dark, ReScript, and F#, both of them are 64-bit\nfloating point numbers."),Object(l.b)("p",null,"Like in Dark, there are special operators to work on floats in ReScript."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = 0.1 in\nx +. 0.3\n")),Object(l.b)("p",null,"To convert from floats to ints use ",Object(l.b)("inlineCode",{parentName:"p"},"Float.toInt"),", or ",Object(l.b)("inlineCode",{parentName:"p"},"Float.round"),"."),Object(l.b)("p",null,"In F#, standard operators work on floats too."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = 0.1 in\nx +. 0.3\n")),Object(l.b)("h3",{id:"bool"},"Bool"),Object(l.b)("p",null,"Like in Dark, ",Object(l.b)("inlineCode",{parentName:"p"},"bool"),"s in F# and ReScript are either ",Object(l.b)("inlineCode",{parentName:"p"},"true")," or ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h3",{id:"string"},"String"),Object(l.b)("p",null,"Strings are Unicode in Dark, ReScript and F#. While you're unlikely to hit\ndifferences in practice, they do actually use a different in-memory\nrepresentation, with Dark using UTF-8, rescript using the browser's built-in\nUCS-2, and F# using .NET's UTF-16 (which is very similar but not quite the same\nas UCS-2)."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let myString = "some string, escaping is allowed\\nwhich dark doesn\'t support yet" in\nmyString\n')),Object(l.b)("h3",{id:"string-interpolation"},"String Interpolation"),Object(l.b)("p",null,"Both ReScript and F# support string interpolation. In F#:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let x = 6\nlet y = 7.8\nlet myString = $"some string with x: {x} and also {y}"\n')),Object(l.b)("p",null,"In ReScript:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = 6\nlet y = 7.8\nlet myString = {j|some string with x: $x and also $y|j}\n")),Object(l.b)("p",null,"Dark does not currently support String interpolation."),Object(l.b)("h3",{id:"list"},"List"),Object(l.b)("p",null,"Lists in Dark, F# and ReScript are almost the same. In ReScript and F#, lists\nuse ",Object(l.b)("inlineCode",{parentName:"p"},";")," as separators, like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"[1; 2; 3; 4]\n")),Object(l.b)("p",null,"(However, F# allows separators to be omitted which the list elements are lined\nup vertically, as it uses indentation as the separator)."),Object(l.b)("p",null,"While Dark technically allows you to create lists that have different types in\nthem, ReScript and F# emphatically do not."),Object(l.b)("p",null,"To type check a list in ReScript, you specify its type like so: ",Object(l.b)("inlineCode",{parentName:"p"},"int list"),",\nwhich is a list of ints. In F#, you use ",Object(l.b)("inlineCode",{parentName:"p"},"List<int>")," (though ",Object(l.b)("inlineCode",{parentName:"p"},"int list")," is still\nallowed)."),Object(l.b)("h3",{id:"records"},"Records"),Object(l.b)("p",null,"Records are mostly used as objects are in most languages. Like Dark, they only\nhave fields, not methods, and you use functions to manipulate them."),Object(l.b)("p",null,"A record in ReScript has unusual syntax:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'{ field1 = 56\n; field2 = true\n; field3 = "asd"\n}\n')),Object(l.b)("p",null,"F# uses the same syntax, though it allows you to use indentation instead of\nseparators:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'{\n  field1 = 56\n  field2 = true\n  field3 = "asd"\n}\n')),Object(l.b)("p",null,"Note that they use ",Object(l.b)("inlineCode",{parentName:"p"},"=")," to connect a field and a value, and ",Object(l.b)("inlineCode",{parentName:"p"},";")," as row separator.\nThe types of the fields do not have to be declared."),Object(l.b)("p",null,"Records are immutable, like almost everything in ReScript/F#, and are updated\nusing an unusual syntax:"),Object(l.b)("p",null,"In ReScript:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = { field1 = 56; field2 = true } in\nlet updatedX = { x with field1 = 57 } in\ndoSomethingWith updatedX\n")),Object(l.b)("p",null,"In F#:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = { field1 = 56; field2 = true }\nlet updatedX = { x with field1 = 57 }\ndoSomethingWith updatedX\n")),Object(l.b)("p",null,"Note that records in Dark are really dictionaries, which is why you update them\nwith ",Object(l.b)("inlineCode",{parentName:"p"},"Dict::set"),". We're trying to figure out how to split records and\ndictionaries apart better in Dark, after which they will be more like\nReScript/F# (though hopefully with better syntax)."),Object(l.b)("p",null,"Type definitions for records look like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"type person =\n  {\n    name : string\n  ; age : int\n  }\n")),Object(l.b)("h3",{id:"let"},"Let"),Object(l.b)("p",null,"ReScript ",Object(l.b)("inlineCode",{parentName:"p"},"let"),"s have a slightly different syntax to Dark:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = 45 in\nx + 23\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"in")," at the end is required."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"let")," also allow destructing in ReScript/F#, although we don't currently use\nthat very often."),Object(l.b)("h3",{id:"if"},"If"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"if")," statements in F#/OCaml are extremely similar to Dark, including that they\nonly allow ",Object(l.b)("inlineCode",{parentName:"p"},"bool"),"s as the condition, and in their syntax."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'if hasAccess user\nthen "Welcome!"\nelse "Access denied"\n')),Object(l.b)("h3",{id:"operators"},"Operators"),Object(l.b)("p",null,"F#/OCaml, in keeping with its odd syntax, have some unusual operators. Most\nimportantly, the equality operator is ",Object(l.b)("inlineCode",{parentName:"p"},"=")," (that's just one equals sign), whereas\nin most languages it's ",Object(l.b)("inlineCode",{parentName:"p"},"==")," (including Dark). ",Object(l.b)("inlineCode",{parentName:"p"},"=")," is very strict equality,\nequivalent to ",Object(l.b)("inlineCode",{parentName:"p"},"===")," in languages that have that, such as JS."),Object(l.b)("p",null,"ReScript/F# also have a ",Object(l.b)("inlineCode",{parentName:"p"},"==")," operator, but you should never use it."),Object(l.b)("p",null,"F#/ReScript use ",Object(l.b)("inlineCode",{parentName:"p"},"<>")," for inequality (",Object(l.b)("inlineCode",{parentName:"p"},"!=")," in\nDark)",Object(l.b)("inlineCode",{parentName:"p"},". In ReScript, most of the comparison operators (such as "),"<",Object(l.b)("inlineCode",{parentName:"p"},", "),">",Object(l.b)("inlineCode",{parentName:"p"},", "),"<=`,\netc) only operate on integers, and not on floats. In F#, they work on both ints\nand floats."),Object(l.b)("h3",{id:"match"},"Match"),Object(l.b)("p",null,"Dark has a ",Object(l.b)("inlineCode",{parentName:"p"},"match")," statement that is very similar to F#/ReScript, with slightly\ndifferent syntax:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"match myValue with\n| Some x -> 5\n| _ -> 6\n")),Object(l.b)("p",null,"Notice the ",Object(l.b)("inlineCode",{parentName:"p"},"with")," keyword, and starting the patterns with ",Object(l.b)("inlineCode",{parentName:"p"},"|"),"."),Object(l.b)("p",null,"F#/ReScript also support more powerful ",Object(l.b)("inlineCode",{parentName:"p"},"match"),"es, for example multiple patterns\ncan match a single branch:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'match myValue with\n| 4 | 5 | 6 -> "between 4 and 6"\n| _ -> "not between 4 and 6"\n')),Object(l.b)("p",null,"ReeScript/F# also support the ",Object(l.b)("inlineCode",{parentName:"p"},"when")," clause:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'match myValue with\n| Some myInt when myInt >= 4 && myInt <= 6 -> "between 4 and 6"\n| _ -> "not between 4 and 6"\n')),Object(l.b)("p",null,"Be careful of very subtle bugs when combining multiple patterns with ",Object(l.b)("inlineCode",{parentName:"p"},"when"),"\nclauses: the entire pattern will fail if the pattern matches when the clause\ndoes not:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let myValue = Some 5 in\nmatch myValue with\n| Some 4 | Some myInt when myValue <> Some 4 -> "this will never succeed"\n| _ -> "this will succeed as a fallback"\n')),Object(l.b)("h3",{id:"variants"},"Variants"),Object(l.b)("p",null,"Dark has a handful of enums for ",Object(l.b)("inlineCode",{parentName:"p"},"Option")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Result")," types: ",Object(l.b)("inlineCode",{parentName:"p"},"Just"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Nothing"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"Ok")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Error"),". In the future we will expand this to allow user-defined types\nas well."),Object(l.b)("p",null,"ReScript/F# support the ",Object(l.b)("inlineCode",{parentName:"p"},"Option")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Result")," types and we use them a lot.\nHowever, the constructors for Option are named differently; both languages use:\n",Object(l.b)("inlineCode",{parentName:"p"},"Some")," and ",Object(l.b)("inlineCode",{parentName:"p"},"None")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"Just")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(l.b)("p",null,'These enums are typically called "variants". We use them frequently, especially\nto represent expressions. For example in ',Object(l.b)("inlineCode",{parentName:"p"},"FluidExpression.ml"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"type t =\n  | EInteger of id * string\n  | EBool of id * bool\n  | EString of id * string\n  | EFloat of id * string * string\n  | ENull of id\n  | EBlank of id\n  | ELet of id * string * t * t\n  | EIf of id * t * t * t\n  | EBinOp of id * string * t * t * sendToRail\n  | ELambda of id * (analysisID * string) list * t\n  | EFieldAccess of id * t * string\n  | EVariable of id * string\n  | EFnCall of id * string * t list * sendToRail\n  | EPartial of id * string * t\n  | ERightPartial of id * string * t\n  | ELeftPartial of Shared.id * string * t\n  | EList of id * t list\n  | ERecord of id * (string * t) list\n  | EPipe of id * t list\n  | EConstructor of id * string * t list\n  | EMatch of id * t * (FluidPattern.t * t) list\n  | EPipeTarget of id\n  | EFeatureFlag of id * string * t * t * t\n")),Object(l.b)("p",null,"Type ",Object(l.b)("inlineCode",{parentName:"p"},"t")," (it's a common convention to name the main type of a module ",Object(l.b)("inlineCode",{parentName:"p"},"t"),") must\nbe one of ",Object(l.b)("inlineCode",{parentName:"p"},"EInteger"),", ",Object(l.b)("inlineCode",{parentName:"p"},"EBool"),", ",Object(l.b)("inlineCode",{parentName:"p"},"EString"),", etc. ",Object(l.b)("inlineCode",{parentName:"p"},"EInteger")," takes two parameters,\nan ",Object(l.b)("inlineCode",{parentName:"p"},"id")," and a ",Object(l.b)("inlineCode",{parentName:"p"},"string")," (we use a string to represent integers as Bucklescript\ndoesn't have a big enough integer type)."),Object(l.b)("p",null,"To create a ",Object(l.b)("inlineCode",{parentName:"p"},"t"),", you'd do something like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let expr = EInteger (id, "test")\n')),Object(l.b)("p",null,"To get values from them, you pattern match:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'match expr with\n| EInteger (_, str) -> str\n| _ -> "not an int"\n')),Object(l.b)("h3",{id:"lambdas"},"Lambdas"),Object(l.b)("p",null,"ReScript and F# support lambdas and we use them frequently. They have a\ndifferent syntax to Dark, F# uses:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"list\n|> List.map (fun elem -> elem + 2)\n")),Object(l.b)("p",null,"It's very common to use functions like ",Object(l.b)("inlineCode",{parentName:"p"},"List.map")," which have a parameter called\n",Object(l.b)("inlineCode",{parentName:"p"},"f")," which take a lambda. In F#, above, that parameter is passed like any other.\nIn ReScript, those parameters are passed as labelled variables:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"list\n|> List.map ~f:(fun elem -> elem + 2)\n")),Object(l.b)("h3",{id:"pipes"},"Pipes"),Object(l.b)("p",null,"OCaml has pipes which are the same as in Dark, except that in ReScript and F#,\nthe pipe goes into the final position (in Dark it goes into the first position):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"list\n|> List.map ~f:(fun elem -> elem + 3)\n")),Object(l.b)("h3",{id:"dictionaries"},"Dictionaries"),Object(l.b)("p",null,"Dictionaries (hash-maps, etc) are typically called ",Object(l.b)("inlineCode",{parentName:"p"},"Map")," in F#/ReScript. In\nReScript, they are slightly challenging to use, which is one reason you won't\nsee them used as much as they really should be."),Object(l.b)("h3",{id:"unit"},"Unit"),Object(l.b)("p",null,"F#/ReScript have a ",Object(l.b)("inlineCode",{parentName:"p"},"unit")," type, whose only member is ",Object(l.b)("inlineCode",{parentName:"p"},"()"),". That's an actual\nvalue, for example, all this is valid code:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let falseVar = () != () in\n")),Object(l.b)("p",null,"It's typically used to pass to a function which is impure but doesn't have any\nmeaningful arguments, such as ",Object(l.b)("inlineCode",{parentName:"p"},"gid ()")," (which generates IDs)."),Object(l.b)("h3",{id:"error-handling"},"Error handling"),Object(l.b)("p",null,"Typically we use ",Object(l.b)("inlineCode",{parentName:"p"},"Result")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Option"),"s for error handling. You'll very commonly\nsee something like"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let isRailable (m : model) (name : string) =\n  m.functions\n  |> Functions.find name\n  |> Option.map ~f:(fun fn ->\n         fn.fnReturnTipe = TOption || fn.fnReturnTipe = TResult)\n  |> Option.withDefault ~default:false\n")),Object(l.b)("p",null,"To find out if a function goes on the error rail, we search for a function,\nwhich returns an Option. We then use a ",Object(l.b)("inlineCode",{parentName:"p"},"map")," to operate on the option, and\nfinally choose a default in case the Option returned ",Object(l.b)("inlineCode",{parentName:"p"},"None"),"."),Object(l.b)("h4",{id:"exceptions"},"Exceptions"),Object(l.b)("p",null,"F# and ReScript also have exceptions - we hardly use them in the client, but\nunfortunately use them a little bit on the backend, which we'd like to do less\nof."),Object(l.b)("p",null,"Unfortunately, it's hard to tell when an exception could be thrown."),Object(l.b)("h3",{id:"imperative-programming"},"Imperative programming"),Object(l.b)("p",null,"F# and ReScript support imperative programming which Dark does not support yet.\nThere are mutable values called refs, that can be updated:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let myString = ref "old value" in\nmyString := "new value"; (* update contents of myString *)\nprint_endline myString\n')),Object(l.b)("p",null,"To go along with it, F# and ReScript have ",Object(l.b)("inlineCode",{parentName:"p"},"for")," and ",Object(l.b)("inlineCode",{parentName:"p"},"while")," loop, allowing you\nto use imperative programming in places where it's clearer to do so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"for i = 1 to n_jobs () do\n  do_next_job ()\ndone\n")),Object(l.b)("h3",{id:"advanced-functions"},"Advanced functions"),Object(l.b)("h4",{id:"named-parameters"},"Named parameters"),Object(l.b)("p",null,"ReScript Functions support named parameters, which you might see called like\nthis (note the ",Object(l.b)("inlineCode",{parentName:"p"},"~"),"):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"Option.withDefault ~default:5 (Some 5)\n")),Object(l.b)("p",null,"These are useful as a named parameter can be placed in any order (this is also\nuseful for piping)."),Object(l.b)("p",null,"You declare functions with named parameters like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let myFunction (regularParamter : int) ~(namedParam : string) : int =\n  ...body of function...\n")),Object(l.b)("p",null,"These are not in F# or Dark."),Object(l.b)("h4",{id:"optional-parameters"},"Optional parameters"),Object(l.b)("p",null,"ReScript also supports optional parameters, which F# and OCaml do not."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let myFunction ?(optionalParam = 3) (regularParamter : int) : int =\n  ...body of function...\n")),Object(l.b)("h4",{id:"the-rec-and-and-keywords"},"the ",Object(l.b)("inlineCode",{parentName:"h4"},"rec")," and ",Object(l.b)("inlineCode",{parentName:"h4"},"and")," keywords"),Object(l.b)("p",null,"By default, F#/ReScript functions are not recursive: they cannot call\nthemselves. To allow a function to call itself, add the ",Object(l.b)("inlineCode",{parentName:"p"},"rec")," keyword:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let rec myFunction (var : int) : int =\n  if var > 6 then 6\n  else myFunction (var + 2)\n")),Object(l.b)("p",null,"Similarly, if two functions need to call each other, they need to be aware of\neach other (F#/ReScript programs require all functions to be defined before they\nare used). The ",Object(l.b)("inlineCode",{parentName:"p"},"and")," keyword allows this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let firstFunction (var : int) =\n  (secondFunction var) + 2\n\nand secondFunction (var : int) =\n  if var > 6\n  then firstFunction 0\n  else firstFunction (var + 1)\n")),Object(l.b)("h4",{id:"partial-application--currying"},"Partial application / currying"),Object(l.b)("p",null,"Occasionally you'll see a function called with fewer arguments than it has\nparameters:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let myFunction (param1: int) (param2 : string) =\n  ...body...\n\nlet myOtherFunction = myFunction 6\n")),Object(l.b)("p",null,'This is called "partial application", in that the function is only partially\ncalled (this is often called ',Object(l.b)("em",{parentName:"p"},"Currying")," in the functional language community).\nThis just means that some parameters are filled in, and you now have a function\nwhich can be called with the remaining parameters:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let () =\n  myOtherfunction "final argument"\n')),Object(l.b)("p",null,"This is the same as if it were defined as:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let myOtherFunction (param : string) =\n  myFunction 6 param\n")),Object(l.b)("h3",{id:"modules"},"Modules"),Object(l.b)("p",null,"ReScript has a complex module system, which takes some time to grasp. Modules\ncan have parameters, have inheritance, and each other these features uses a\ncomplicated, difficult to grasp syntax."),Object(l.b)("p",null,"We only barely use modules in the Dark codebase, so here's what you need to\nknow:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"all files are automatically modules. Note that in the backend, modules need to\nhave their directory names included, but not in the client.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"using a module is simple:"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"open MyModule1 (* all function and types are available *)\nmodule M = MyModule2 (* access members as if the module was called M *)\n\nlet x = MyModule3.myFunction 6\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"the syntax of creating a module is also straightforward:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"module MyModule = struct\n  type t = int\n  let myfunction x = x + 2\nend\n")),Object(l.b)("p",null,"We typically ",Object(l.b)("inlineCode",{parentName:"p"},"open")," the ",Object(l.b)("inlineCode",{parentName:"p"},"Prelude")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Types")," modules at the top of all files\n(which in turn open other modules, like ",Object(l.b)("inlineCode",{parentName:"p"},"Tablecloth")," on the client)."),Object(l.b)("p",null,"F# does have modules, but it does not support any of the complex stuff that\nReScript does."),Object(l.b)("h3",{id:"classes-and-objects"},"Classes and Objects"),Object(l.b)("p",null,"ReScript supports traditional object oriented programming, though it's not used\nvery much and very discouraged. The only place we really use it for interacting\nwith JS (the ReScript JS interop code compiles it to direct OO in JS)."),Object(l.b)("p",null,"F# has OO that is used to interact with .NET types, and call C# libraries. We do\nnot use it very much but we do use it some. Defining a method:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'type Pos =\n  { x : int\n  ; y : int\n  }\n  member this.JustXPlease() = this.x\n  override member this.ToString() = #"{this.x\nend\n')),Object(l.b)("h2",{id:"rescript-vs-bucklescriptreasonml"},"ReScript vs Bucklescript/ReasonML?"),Object(l.b)("p",null,'ReScript is the new name (as of 2020) for what was sometimes called Bucklescript\nand sometimes called ReasonML. You may see references to Bucklescript in our\ncodebase (including the prefix "bs").'),Object(l.b)("p",null,"Because Dark's backend was in OCaml, we wrote the frontend using the alternate\nOCaml syntax for ReScript, which is not well documented. We will probably switch\nat some point to the ReScript syntax."))}b.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||l;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);