"use strict";(self.webpackChunkqped_website=self.webpackChunkqped_website||[]).push([[993],{9096:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var s=o(5668),a=o(9148),n=o(9243),r=o(9308),i=o(6051),l=o(5414),c=o(3628),d=o(2173),h=o(2682),u=o(5893);function f(){return(0,u.jsxs)(s.Z,{theme:c.rS,children:[(0,u.jsx)(a.ZP,{}),(0,u.jsxs)(l.q,{htmlAttributes:{lang:"en"},children:[(0,u.jsx)("meta",{charSet:"utf-8"}),(0,u.jsx)("title",{children:"QPED: Quality-focussed Programming Education: Intellectual Output 2"}),(0,u.jsx)("meta",{name:"description",content:"QPED: Quality-focussed Programming Education - Intellectual Output 3"}),(0,u.jsx)("link",{rel:"canonical",href:"https://www.qped.eu"})]}),(0,u.jsx)(h.h,{}),(0,u.jsx)(i.B,{title:"Intellectual Output 3: Feedback Tools"}),(0,u.jsxs)(n.Z,{id:"about",maxWidth:"md",component:"main",sx:{paddingTop:8,paddingLeft:2,paddingRight:2,paddingBottom:6},children:[(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:"Giving feedback on programming assignments at various levels is an integral and important part of computer science education. Nevertheless, reviewing student solutions and writing feedback comments is also a time consuming and tedious task. Early in the curriculum, in particular, students frequently make the same mistakes like submitting not compiling code, violating coding conventions or predictably overlooking certain requirements. In Intellectual Output (IO) 3 “Feedback Tools” we develop tools to support students by providing automated feedback on such foreseeable mistakes. In this way, students can get feedback more frequently and with shorter delays, or even check the correctness of their solutions themselves. This also supports teachers because they spend less time reviewing student solutions and writing recurring feedback. But at the same time, for the generated feedback to be most useful, our tools allow teachers to configure the feedback tools according to the progress and teaching style in their course. Importantly, our feedback tools do not only assess the functional correctness of student solutions, but they in particular also assess the quality of tests written as part of the solutions."}),(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:"To free students as well as teachers from the need to locally install any tools, our tools are integrated into the web-based e-learning platform Quarterfall. This is a learning management system where teachers can host course material including assignments. Students can access the material and submit solutions to the assignments. Students can check their solutions before final submission and Quarterfall already allows teachers to define some checking criteria like unit testing. It also provides hooks that teachers can use to provide additional fully customized checks. Most notably, the Cloud Check Server in Quarterfall can run programs with a certain interface that process student solutions and automatically generate feedback messages in Markdown. The implementation of the Cloud Check Server is part of this Intellectual Output and has been released as open-source software. Another output of this IO is an open-source library of analyses for UML diagrams called ParseidonJS so that students can submit solutions in the Mermaid format."}),(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:"We develop Cloud Checks in this IO for programming solutions written in Java as well as Python. Our Cloud Check for Java code, which we call “MASS”, can analyze the syntax, coding style, object-oriented metrics, solution approach and test quality. Teachers can configure these checks, e.g., by selecting how strictly warnings or violations of coding conventions should be treated. They can also configure conventions, e.g., by providing regular expressions for naming rules or boundaries for the number of lines of code. Regarding the solution approach, they can, for instance, configure whether a method must be recursive, and in terms of test quality, requirements for the code coverage of tests can be specified as well as to what extend the preconditions of methods are tested. MASS allows to select a level for feedback messages depending on the experience level of the course. For beginners, feedback messages are usually longer, giving more information. Often, they contain examples for fixing a kind of mistake. In several cases, MASS also allows teachers to provide tailored feedback messages."}),(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:"For Python code we have developed another Cloud Check finding syntax errors, common formatting and coding convention violations (based on PEP8) and bad smells, e.g., a variable not being defined where it is used. Our checker produces easily accessible feedback messages containing a link to https://www.flake8rules.com/ where students can see both a code-based example showing the error they made, i.e., an anti-pattern, and a correct version of the example in which a best practice is applied. Thanks to this example and counter-example, students can understand their mistakes more easily. Finally, teachers can configure whether the messages are shown sequentially in the order of detection or grouped by the kind of error (syntax, style or semantic)."}),(0,u.jsx)(r.Z,{variant:"h4",gutterBottom:!0,children:"How to apply in your education"}),(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:"The Feedback Tools developed in this intellectual output are designed to be used from the beginning on in the first programming course. They allow also to submit incomplete code such as single expressions, sequences of statements or methods. But, of course, also full classes and even a ZIP-file containing all packages and source files of larger solutions can be submitted and analyzed. Therefore, our tools also scale to later programming courses, where students have to develop larger solutions."}),(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:"Configuring certain requirements for test cases in our feedback tools, like a sufficient coverage, makes it clear to students that tests are not optional but a part of the solution. And by giving feedback on insufficient tests, we can also show that this part of their solution is highly valued by the teacher, possibly being part of the grading criteria."}),(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:"By offering access to the feedback tools through the user-friendly web platform Quarterfall using them becomes very easy to students, lowering the hurdle of checking whether their solutions meet the quality criteria as set by the teacher. In this way, students get early feedback on several mistakes, which can be improved before finally handing in their solution. As a result, the grading criteria become more transparent, handed-in solutions become of higher-quality and teachers can focus on additionally giving individual feedback on the more complex aspects, which can currently not be assessed automatically."}),(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:"To support teachers, we have additionally developed a configuration web form for teachers. Also, extensive documentation exists on the usage of the Quarterfall platform and specific tutorials have been developed on the usage of our different feedback tools."}),(0,u.jsx)(r.Z,{variant:"h4",gutterBottom:!0,children:"Available material"}),(0,u.jsx)(r.Z,{color:"textSecondary",gutterBottom:!0,children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://github.com/qped-eu/mass",children:"Configuration tool and tutorials for the Java-based feedback tools"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://github.com/qped-eu/PythonChecker",children:"Documentation of the Python-based feedback tools"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://github.com/quarterfall/cloudcheck",children:"Cloud Check Server Git repository"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://github.com/quarterfall/parseidon",children:"ParseidonJS Git repository"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://github.com/qped-eu",children:"Git repository of the feedback tools"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://pro.quarterfall.com/do/j7qg0pcp",children:"Bag exercise"})})]})})]}),(0,u.jsx)(d.$,{})]})}}}]);
//# sourceMappingURL=component---src-pages-io-3-tsx-fb896ac54fdcfd90e5f1.js.map