/* ============================== DEMO DATA ============================== */
const STUDENT = { name:"Aarav Sharma", first:"Aarav", cls:"VIII – E", roll:"21", initials:"AS", parent:"Mr. Rakesh Sharma", login:{user:"student", pass:"veda123"},
  school:"Greenwood Public School", board:"CBSE", preparing:"Class 10 Boards (foundation) · Science & Maths Olympiad", batch:"Foundation 2026–27 · Evening batch (4:00 – 7:20 PM)",
  since:"June 2026", dob:"14 March 2013", phone:"+91 98450 •••• 10", email:"parent.aarav@example.com", id:"VV-2026-0821" };
const TODAY = new Date(2026,10,21); // 21 Nov 2026

const EXAMS = [
 { id:"phy-oct", name:"Unit Test – Exploring Forces", short:"Physics UT", subject:"Physics", date:"2026-10-30", max:35, score:25, classAvg:63,
   sections:[["Section A (MCQ / A–R)",5,6],["Section B (2-mark)",6,8],["Section C (3-mark)",7.5,12],["Section D (case-based)",2.5,4],["Section E (long answer)",4,5]],
   overall:"Aarav scored 25 out of 35 (71.4%). His writing is a real strength: Q8, Q9 and Q14 earned full marks with clear, well-organised explanations, and his answer on zero error in Q12(b) was excellent. Marks were lost in a few specific places: Q5 and the weight calculation in Q7 were not attempted, the spring-balance scale in Q12(a) was misread, and five marks were lost on upthrust, where he explained floating through density but not through the water pushed aside. With a few careful corrections he can move into the 80s.",
   wentWell:["Clear, complete written explanations: Q8, Q9 and Q14 are full-mark answers, with a good grasp of friction and electrostatic force.","Excellent explanation of zero error in Q12(b) and correct reasoning on a heavier object stretching the spring.","Correct and confident on definitions in upthrust (Q15iii, Q16a, Q16c)."],
   workOn:["<b>Upthrust and water pushed aside:</b> explain floating through displaced water, not density alone (Q13, Q15ii, Q16b).","<b>Spring-balance scale:</b> one division = range ÷ number of divisions = 10 ÷ 20 = 0.5 N (Q12a).","<b>Force is not stored:</b> a heavy truck does not have more force “inside” it (Q10).","<b>Attempt every part:</b> Q5 and the weight calculation in Q7(b) were left blank (2 marks)."],
   nextSteps:["Aarav follows a 14-day improvement plan of about 35–40 minutes a day (Day 7: weekly check; Day 14: 20-mark retest).","Daily DPPs in the app are built from his weak topics.","Faculty doubt-clearing sessions are built into the plan.","We will share the retest result with you after Day 14. Our target is at least 80%."],
   helpHome:["<b>Daily routine:</b> keep one fixed 40-minute study slot at the same time each day, with the phone away.","<b>Homework without pressure:</b> check that each day's DPP is done, not the marks. Ask Aarav to teach you one idea in two minutes.","<b>Encourage understanding:</b> ask everyday “why” questions: why does a boat float but a coin sink?","<b>Track improvement:</b> compare Aarav only with his own earlier scores and celebrate small gains."],
   conclusion:"Aarav writes clearly and confidently and has built a good base. By clearing the upthrust idea, correcting the spring-balance calculation and making sure no part is left blank, he can reach the 80s in his next test.",
   strong:[{t:"Friction",q:"Q8, Q14",note:"Full marks with clear everyday examples."},{t:"Electrostatic force",q:"Q9",note:"Full marks; correct reasoning on charged objects."},{t:"Zero error of a spring balance",q:"Q12(b)",note:"Excellent, complete explanation."},{t:"Definitions in upthrust",q:"Q15(iii), Q16(a), Q16(c)",note:"Correct and confident."}],
   weak:[{t:"Upthrust and displaced water",q:"Q13, Q15(ii), Q15(iv), Q16(b)",lost:5,pr:"High",why:"Explained floating through density only, not through the water pushed aside.",act:"Float/sink demo with an overflow can; one-to-one doubt session; 5 DPP questions a day for 5 days."},
         {t:"Reading a spring-balance scale",q:"Q12(a)",lost:1,pr:"High",why:"Least count calculated the wrong way round (20 ÷ 10).",act:"Least-count drill: range ÷ divisions, with 6 practice readings in class."},
         {t:"Parts left blank",q:"Q5, Q7(b)",lost:2,pr:"Medium",why:"Two parts not attempted, including the weight calculation.",act:"Marks-to-minutes rule and a 2-minute “before you hand in” check in every test."},
         {t:"Force is not stored",q:"Q10",lost:1,pr:"Medium",why:"Agreed that a heavy truck has “more force inside”.",act:"Quick concept check in class: force acts only while objects interact."},
         {t:"Naming all forces",q:"Q11",lost:1,pr:"Medium",why:"Named only one of the two forces acting.",act:"Free-body diagram practice: list every force before answering."}],
   plan:[["Day 1–3","Upthrust and displaced water: demo, notes, DPP"],["Day 4–5","Spring-balance least count and readings"],["Day 6","Force is not stored; naming all forces"],["Day 7","Weekly check (10 marks)"],["Day 8–13","Mixed DPP and timed practice"],["Day 14","20-mark retest"]],
   target:"80% or more in the Day 14 retest", faculty:"Physics Faculty" },
 { id:"sci-sep", name:"Half-Yearly Examination – General Science", short:"Half-Yearly", subject:"Science", date:"2026-09-15", max:80, score:54, classAvg:60,
   sections:[["Biology",20,28],["Chemistry",18,25],["Physics",16,27]],
   overall:"Aarav scored 54 out of 80 (67.5%). Biology was his strongest part. Most marks were lost in Physics numericals and in experiment-reasoning questions.",
   wentWell:["Cell structure and organelles answered well.","Good use of diagrams in Biology.","MCQs and matching were mostly correct."],
   workOn:["<b>Net force:</b> add forces in the same direction, subtract opposing forces (Q32).","<b>SI units:</b> kelvin, m³ and kg/s (Q31).","<b>Observation vs inference:</b> write only what is seen, then the conclusion (Q18)."],
   nextSteps:["Weekly numericals practice.","Observation–inference practice in lab periods."],
   helpHome:["Keep a fixed daily study time.","Praise effort and progress, not only marks."],
   conclusion:"A solid half-yearly with clear strengths in Biology. Physics numericals are the main area to build.",
   strong:[{t:"Cell structure and organelles",q:"Q7, Q12",note:"Correct labelling and functions."},{t:"Mixtures",q:"Q16, Q17",note:"Clear classification."}],
   weak:[{t:"Net force and free-body diagrams",q:"Q32",lost:3,pr:"High",why:"Confused the second pull with the net force.",act:"Tug-of-war FBDs with arrow lengths; add-and-subtract drills."},
         {t:"SI units",q:"Q31",lost:2,pr:"High",why:"Wrote degree Celsius and litre as SI units.",act:"SI-unit flash cards and a quick quiz every class."},
         {t:"Observation vs inference",q:"Q18",lost:2,pr:"Medium",why:"Wrote an observation that was not actually seen.",act:"Two-column observation / inference practice in the lab."}],
   plan:[["Week 1","Net force and FBD practice"],["Week 2","SI units and conversions"],["Week 3","Observation–inference writing"],["Week 4","Timed sectional test"]],
   target:"75% or more in the next Science test", faculty:"Science Faculty" },
 { id:"mat-aug", name:"Unit Test – Rational Numbers & Linear Equations", short:"Maths UT", subject:"Maths", date:"2026-08-12", max:40, score:27, classAvg:61,
   sections:[["Section A (MCQ)",8,10],["Section B (short answer)",11,15],["Section C (word problems)",8,15]],
   overall:"Aarav scored 27 out of 40 (67.5%). He is accurate on properties of rational numbers. Word problems on linear equations need more practice.",
   wentWell:["Properties of rational numbers: all correct.","Simple linear equations solved step by step."],
   workOn:["<b>Word problems:</b> form the equation from the statement before solving.","<b>Number line:</b> mark rational numbers by dividing the unit into equal parts."],
   nextSteps:["Three word problems a day for two weeks."],
   helpHome:["Ask Aarav to explain one word problem to you each day."],
   conclusion:"Good accuracy on basics. Practising word problems will lift his score.",
   strong:[{t:"Properties of rational numbers",q:"Q1–Q6",note:"All correct."},{t:"Solving simple linear equations",q:"Q9, Q10",note:"Neat, step-by-step working."}],
   weak:[{t:"Word problems on linear equations",q:"Q13, Q14, Q15",lost:7,pr:"High",why:"Could not form the equation from the statement.",act:"“Let x be…” framing practice; 3 word problems a day."},
         {t:"Rational numbers on the number line",q:"Q11",lost:2,pr:"Medium",why:"Divided the unit into the wrong number of parts.",act:"Number-line drills with fractions."}],
   plan:[["Week 1","Forming equations from statements"],["Week 2","Mixed word problems and retest"]],
   target:"80% in the retest", faculty:"Maths Faculty" },
 { id:"chem-jul", name:"Unit Test – Synthetic Fibres & Metals", short:"Chemistry UT", subject:"Chemistry", date:"2026-07-20", max:35, score:22, classAvg:58,
   sections:[["Section A (MCQ)",6,8],["Section B (short answer)",9,15],["Section C (long answer)",7,12]],
   overall:"Aarav scored 22 out of 35 (62.9%). He knows the types of fibres well. Reactivity of metals and the properties of metals and non-metals need revision.",
   wentWell:["Types of synthetic fibres and their uses.","Plastics and the environment: good examples."],
   workOn:["<b>Reactivity series:</b> which metal displaces which.","<b>Metals vs non-metals:</b> physical and chemical properties table."],
   nextSteps:["Reactivity-series practice with displacement reactions."],
   helpHome:["Ask Aarav to explain why iron gates are painted."],
   conclusion:"A fair start. Revising the reactivity series will make a quick difference.",
   strong:[{t:"Types of synthetic fibres",q:"Q1–Q5",note:"Correct uses and examples."}],
   weak:[{t:"Reactivity series and displacement",q:"Q9, Q12",lost:5,pr:"High",why:"Unsure which metal displaces which.",act:"Displacement demo with copper sulphate and iron nail; reactivity ladder chart."},
         {t:"Properties of metals and non-metals",q:"Q10, Q11",lost:4,pr:"Medium",why:"Mixed up malleability and ductility.",act:"Comparison table and 5-minute oral recall."}],
   plan:[["Week 1","Reactivity series and displacement"],["Week 2","Properties table and retest"]],
   target:"75% in the next Chemistry test", faculty:"Chemistry Faculty" }
];

const WELLBEING = {
  session:"13 November 2026", letter:"18 November 2026", by:"Counsellor, Veda Vidya Institute",
  good:["He follows most of what is taught and is motivated to study.","He is confident in his abilities and recovers quickly from a disappointing result.","He gets along very well with his classmates and has enough time to rest and relax."],
  high:[["Support from parents",100],["Getting along with classmates",100],["Time to rest and relax",100],["Understanding lessons",75],["Confidence in his ability",75],["Motivation to study",75],["Bouncing back after a low mark",75],["Support from teachers",75],["Doubts cleared",75],["General wellbeing",75]],
  low:[["Planning his study time",25],["Concentration in class",50],["Problem solving on his own",50],["Asking questions in class",50]],
  support:[["Planning his study time","He told us he usually catches up by studying the day before an exam. We will help him make a weekly study plan."],["Concentration","He finds it hard at times to concentrate in class and is sometimes hesitant to ask questions. His teachers will check in with him during lessons."],["Maths and problem solving","He sometimes finds it hard to solve questions on his own. We will add Maths quizzes and group problem-solving."]],
  home:["Help him keep a fixed daily study time, so revision is spread across the week.","Praise his effort and progress, not only his marks.","Encourage him to write down anything he did not understand and ask his teacher the next day."]
};

const SUBJECTS = [
 { id:"phy", name:"Physics", color:"#7a1f2b", chapters:[
   { n:1, name:"Force and Pressure",
     summary:"A force is a push or a pull that comes from an interaction between objects. It can change speed, direction or shape. Pressure is force acting on unit area.",
     points:["Force = push or pull; it acts only while objects interact. Force is not stored in an object.","Contact forces: muscular, friction. Non-contact forces: magnetic, electrostatic, gravitational.","Net force: add forces in the same direction, subtract opposing forces.","Pressure = Force ÷ Area; SI unit pascal (Pa) = N/m².","Liquids and gases exert pressure on the walls of their container; atmospheric pressure acts on everything around us."],
     formulas:["Pressure P = F / A","Net force = F₁ + F₂ (same direction)","Net force = F₁ − F₂ (opposite directions)"],
     qs:[{q:"Why are the straps of a school bag made wide?",m:2,y:[2025,2023,2021],imp:true},{q:"Two children pull a box in opposite directions with 45 N and 15 N. Find the net force and its direction.",m:3,y:[2025,2024],imp:true},{q:"Give two examples each of contact and non-contact forces.",m:2,y:[2024,2022]},{q:"A block of weight 50 N rests on an area of 0.25 m². Calculate the pressure.",m:3,y:[2023],imp:true},{q:"Explain why a sharp knife cuts better than a blunt one.",m:2,y:[2022,2021]},{q:"Does a moving truck have force stored in it? Explain.",m:2,y:[2025]}]},
   { n:2, name:"Friction",
     summary:"Friction is the force that opposes relative motion between two surfaces in contact. It depends on the nature of the surfaces and how hard they are pressed together.",
     points:["Friction always opposes the motion between surfaces in contact.","Static friction > sliding friction > rolling friction.","Friction is caused by interlocking of irregularities on the surfaces.","Friction can be reduced by lubricants, ball bearings and streamlining.","Friction is both useful (walking, writing) and harmful (wear and tear, heat)."],
     formulas:["Order: static > sliding > rolling"],
     qs:[{q:"Why is it difficult to walk on a wet, soapy floor?",m:2,y:[2025,2024,2022],imp:true},{q:"Explain why ball bearings are used in machines.",m:2,y:[2024,2021],imp:true},{q:"Friction is a necessary evil. Justify with two examples.",m:3,y:[2023,2021],imp:true},{q:"Why do sports shoes have spikes?",m:2,y:[2022]},{q:"Why are aeroplanes and boats given special shapes?",m:3,y:[2025]}]},
   { n:3, name:"Exploring Forces: Upthrust",
     summary:"When an object is placed in a liquid, the liquid pushes it upward. This upward force is called upthrust or buoyant force. An object floats when the upthrust equals its weight.",
     points:["Upthrust = weight of the liquid pushed aside (displaced) by the object.","An object floats when it pushes aside water equal to its own weight.","A boat floats because its shape lets it push aside a lot of water; a coin sinks because it cannot.","Denser liquids (like salt water) give more upthrust for the same volume displaced.","A spring balance measures force; least count = range ÷ number of divisions."],
     formulas:["Least count = range ÷ number of divisions","Floats when upthrust = weight"],
     qs:[{q:"Why does an iron ship float while an iron nail sinks?",m:3,y:[2025,2024,2023,2021],imp:true},{q:"An egg sinks in fresh water but floats in salt water. Explain.",m:2,y:[2024,2022],imp:true},{q:"A spring balance reads 0–10 N with 20 divisions. Find its least count.",m:2,y:[2025,2023],imp:true},{q:"What is zero error in a spring balance? How is it corrected?",m:2,y:[2024]},{q:"Why does a mug of water feel lighter inside a bucket of water?",m:2,y:[2022,2021]}]},
   { n:4, name:"Sound",
     summary:"Sound is produced by vibrating objects and needs a medium to travel. It cannot travel through vacuum.",
     points:["Sound is produced by vibration.","Sound needs a medium: solids > liquids > gases in speed.","Frequency is measured in hertz (Hz); it decides pitch.","Amplitude decides loudness, measured in decibels (dB).","Humans hear 20 Hz to 20,000 Hz."],
     formulas:["Frequency = number of vibrations ÷ time","Time period = 1 ÷ frequency"],
     qs:[{q:"Why can't astronauts talk to each other directly on the Moon?",m:2,y:[2025,2023],imp:true},{q:"A pendulum makes 40 oscillations in 4 s. Find its frequency and time period.",m:3,y:[2024,2022],imp:true},{q:"Differentiate between noise and music.",m:2,y:[2023]},{q:"Name the part that vibrates to produce sound in a sitar and a drum.",m:2,y:[2021]}]}
 ]},
 { id:"chem", name:"Chemistry", color:"#a25a12", chapters:[
   { n:1, name:"Synthetic Fibres and Plastics",
     summary:"Synthetic fibres are made by humans from petrochemicals. Plastics are polymers that can be moulded into any shape.",
     points:["A polymer is a long chain of small units (monomers).","Rayon, nylon, polyester and acrylic are synthetic fibres.","Thermoplastics soften on heating; thermosetting plastics do not.","Plastics are non-biodegradable; follow the 4 R's.","Nylon is strong, elastic and light."],
     formulas:[],
     qs:[{q:"Why are electric switches made of thermosetting plastic?",m:2,y:[2025,2024,2022],imp:true},{q:"Differentiate between thermoplastics and thermosetting plastics.",m:3,y:[2024,2023],imp:true},{q:"Why should we avoid wearing synthetic clothes in the kitchen?",m:2,y:[2023,2021]},{q:"Explain the 4 R principle with examples.",m:3,y:[2022]}]},
   { n:2, name:"Materials: Metals and Non-metals",
     summary:"Metals are usually hard, shiny, malleable, ductile and good conductors. Non-metals are usually the opposite.",
     points:["Malleability: beaten into sheets. Ductility: drawn into wires.","Metals form basic oxides; non-metals form acidic oxides.","A more reactive metal displaces a less reactive metal from its salt solution.","Sodium is stored in kerosene because it reacts vigorously with air and water.","Iron rusts in the presence of air and moisture."],
     formulas:["Fe + CuSO₄ → FeSO₄ + Cu"],
     qs:[{q:"Why is sodium stored in kerosene?",m:2,y:[2025,2023,2021],imp:true},{q:"What happens when an iron nail is placed in copper sulphate solution? Write the equation.",m:3,y:[2025,2024],imp:true},{q:"Why are iron gates painted?",m:2,y:[2022]},{q:"Give two differences between metals and non-metals.",m:2,y:[2024,2021]}]},
   { n:3, name:"Coal and Petroleum",
     summary:"Coal and petroleum are fossil fuels formed from dead organisms over millions of years. They are exhaustible resources.",
     points:["Coke, coal tar and coal gas are obtained from coal.","Petroleum is refined by fractional distillation.","Fossil fuels are exhaustible and cause pollution.","CNG is a cleaner fuel.","PCRA gives tips to save fuel."],
     formulas:[],
     qs:[{q:"Why are coal and petroleum called fossil fuels?",m:2,y:[2025,2024,2022],imp:true},{q:"List any four products of petroleum and their uses.",m:3,y:[2023],imp:true},{q:"Give two tips to save petrol while driving.",m:2,y:[2021]}]},
   { n:4, name:"Combustion and Flame",
     summary:"Combustion is a chemical process in which a substance reacts with oxygen to give heat and light.",
     points:["Three conditions: fuel, oxygen (air) and ignition temperature.","Water is not used for oil or electrical fires.","The outermost zone of a flame is the hottest.","Calorific value is measured in kJ/kg.","A good fuel is cheap, available and burns cleanly."],
     formulas:["Calorific value = heat produced ÷ mass of fuel"],
     qs:[{q:"What are the three conditions needed for combustion?",m:2,y:[2025,2024,2023,2022],imp:true},{q:"Why is water not used to put out an electrical fire?",m:2,y:[2024,2021],imp:true},{q:"Draw and label the zones of a candle flame.",m:3,y:[2023]}]}
 ]},
 { id:"bio", name:"Biology", color:"#2f7d4f", chapters:[
   { n:1, name:"Cell – Structure and Functions",
     summary:"The cell is the basic structural and functional unit of life. Plant and animal cells share many parts but differ in a few.",
     points:["Cell membrane, cytoplasm and nucleus are common to all cells.","Plant cells have a cell wall and large vacuole; animal cells do not.","Chromosomes are made of DNA and protein.","Rough ER makes proteins; smooth ER makes lipids.","Mitochondria are the powerhouse of the cell."],
     formulas:["Actual size = image size ÷ magnification"],
     qs:[{q:"Why is the cell called the structural and functional unit of life?",m:2,y:[2025,2024,2022],imp:true},{q:"Give three differences between plant and animal cells.",m:3,y:[2025,2023,2021],imp:true},{q:"What are chromosomes made of?",m:1,y:[2024]},{q:"State the function of mitochondria.",m:1,y:[2022]}]},
   { n:2, name:"Microorganisms: Friend and Foe",
     summary:"Microorganisms are tiny living things seen only under a microscope. Some are useful, others cause disease.",
     points:["Groups: bacteria, fungi, protozoa, algae and viruses.","Rhizobium fixes nitrogen in the root nodules of legumes.","Yeast is used in baking; Lactobacillus turns milk into curd.","Vaccines protect us from diseases like polio.","Food is preserved by salting, heating, refrigeration and chemicals."],
     formulas:[],
     qs:[{q:"How does Rhizobium help in increasing soil fertility?",m:2,y:[2025,2024,2023],imp:true},{q:"Explain how vaccines work.",m:3,y:[2024,2022],imp:true},{q:"Name two diseases each caused by bacteria and viruses.",m:2,y:[2023,2021]},{q:"Why does bread dough rise when yeast is added?",m:2,y:[2022]}]},
   { n:3, name:"Crop Production and Management",
     summary:"Crop production involves soil preparation, sowing, manuring, irrigation, weeding, harvesting and storage.",
     points:["Kharif crops are sown in the rainy season; rabi crops in winter.","Ploughing loosens soil and allows roots to breathe.","Manure is organic; fertilisers are chemical.","Drip and sprinkler irrigation save water.","Grains are dried and stored in silos and granaries."],
     formulas:[],
     qs:[{q:"Differentiate between manure and fertiliser.",m:3,y:[2025,2023,2021],imp:true},{q:"Why is ploughing important?",m:2,y:[2024,2022],imp:true},{q:"Give two examples each of kharif and rabi crops.",m:2,y:[2023]}]}
 ]},
 { id:"math", name:"Maths", color:"#2a5d9f", chapters:[
   { n:1, name:"Rational Numbers",
     summary:"A rational number can be written as p/q where p and q are integers and q ≠ 0.",
     points:["Rational numbers are closed under addition, subtraction and multiplication.","0 is the additive identity; 1 is the multiplicative identity.","The reciprocal of a/b is b/a (a ≠ 0).","There are infinitely many rational numbers between any two rational numbers.","To mark p/q on the number line, divide each unit into q equal parts."],
     formulas:["a × (b + c) = a×b + a×c","Reciprocal of a/b = b/a"],
     qs:[{q:"Find five rational numbers between −1/2 and 1/3.",m:3,y:[2025,2024,2022],imp:true},{q:"Represent −3/4 on the number line.",m:2,y:[2024,2023],imp:true},{q:"Write the additive inverse of −7/9 and the reciprocal of −5/8.",m:2,y:[2023,2021]},{q:"Simplify using the distributive property: 2/5 × (−3/7) − 1/14 − 3/7 × 3/5",m:3,y:[2022]}]},
   { n:2, name:"Linear Equations in One Variable",
     summary:"A linear equation in one variable has the highest power of the variable as 1. Solve by doing the same operation on both sides.",
     points:["Transposing a term changes its sign.","Always check your answer by substituting it back.","For word problems, start with “Let the number be x”.","Cross-multiplication works when both sides are single fractions.","Simplify brackets before transposing."],
     formulas:["ax + b = c ⇒ x = (c − b) / a"],
     qs:[{q:"Solve: 3x + 5 = 20.",m:1,y:[2025,2024,2023],imp:true},{q:"The sum of three consecutive multiples of 8 is 888. Find the multiples.",m:3,y:[2025,2023,2021],imp:true},{q:"A number is 12 more than another. Their sum is 74. Find the numbers.",m:3,y:[2024,2022],imp:true},{q:"Solve: (x − 5)/3 = (x − 3)/5.",m:2,y:[2022]}]},
   { n:3, name:"Squares and Square Roots",
     summary:"A perfect square is a number that is the square of a natural number. Square roots can be found by prime factorisation or long division.",
     points:["A perfect square never ends in 2, 3, 7 or 8.","Square of an even number is even; of an odd number is odd.","Pythagorean triplet: 2m, m² − 1, m² + 1.","Prime factorisation: pair up equal factors.","Long division method works for large numbers and decimals."],
     formulas:["(a + b)² = a² + 2ab + b²","Triplet: 2m, m²−1, m²+1"],
     qs:[{q:"Find the square root of 7744 by prime factorisation.",m:3,y:[2025,2024,2022],imp:true},{q:"Find the smallest number by which 1800 must be multiplied to make it a perfect square.",m:3,y:[2024,2023],imp:true},{q:"Write a Pythagorean triplet whose smallest member is 8.",m:2,y:[2023,2021]}]},
   { n:4, name:"Mensuration",
     summary:"Mensuration deals with area, surface area and volume of plane and solid shapes.",
     points:["Area of trapezium = ½ × (sum of parallel sides) × height.","Surface area of cuboid = 2(lb + bh + hl).","Volume of cylinder = πr²h.","1 L = 1000 cm³; 1 m³ = 1000 L.","Curved surface area of cylinder = 2πrh."],
     formulas:["Trapezium = ½(a + b)h","Cuboid SA = 2(lb + bh + hl)","Cylinder V = πr²h"],
     qs:[{q:"Find the area of a trapezium with parallel sides 10 cm and 6 cm and height 4 cm.",m:2,y:[2025,2024,2023],imp:true},{q:"A cylindrical tank has radius 7 m and height 3 m. Find its capacity in litres.",m:3,y:[2025,2022],imp:true},{q:"Find the total surface area of a cube of side 5 cm.",m:2,y:[2021]}]}
 ]}
];

const HOLIDAYS = {"2026-08-15":"Independence Day","2026-09-14":"Ganesh Chaturthi","2026-10-02":"Gandhi Jayanti","2026-10-20":"Dussehra","2026-11-07":"Diwali break","2026-11-09":"Diwali break","2026-11-10":"Diwali break","2026-11-11":"Diwali break"};
const ABSENT = ["2026-06-18","2026-07-07","2026-07-08","2026-07-24","2026-08-21","2026-09-03","2026-09-25","2026-10-13","2026-10-29","2026-11-17"];
const TIMES = ["4:00 – 5:00 PM","5:10 – 6:10 PM","6:20 – 7:20 PM"];
const TEACHERS = {Physics:"Mr. Arjun Rao",Maths:"Mrs. Kavya Nair",Chemistry:"Mr. Sameer Khan",Biology:"Ms. Priya Menon","Doubt Session":"All faculty"};
const SUBJ_COLOR = {Physics:"#7a1f2b",Chemistry:"#a25a12",Biology:"#2f7d4f",Maths:"#2a5d9f","Doubt Session":"#6e5f63"};
const TIMETABLE = {1:["Physics","Maths","Chemistry"],2:["Biology","Maths","Physics"],3:["Chemistry","Maths","Biology"],4:["Physics","Maths","Chemistry"],5:["Biology","Maths","Physics"],6:["Chemistry","Biology","Doubt Session"]};

const UPCOMING = [
 {d:"2026-11-22",t:"Parent–Teacher Meeting",s:"10:00 AM – 1:00 PM · Veda Vidya campus",k:"PTM"},
 {d:"2026-11-24",t:"Guru Nanak Jayanti",s:"Holiday · no classes",k:"Holiday"},
 {d:"2026-11-28",t:"Physics retest (Day 14)",s:"20 marks · Upthrust, spring balance, forces",k:"Test"},
 {d:"2026-12-05",t:"Unit Test – Chemistry",s:"Coal and Petroleum · Combustion and Flame",k:"Test"},
 {d:"2026-12-12",t:"Unit Test – Maths",s:"Squares and Square Roots · Mensuration",k:"Test"},
 {d:"2026-12-19",t:"Unit Test – Biology",s:"Microorganisms · Crop Production",k:"Test"},
 {d:"2026-12-25",t:"Christmas",s:"Holiday · no classes",k:"Holiday"},
 {d:"2026-12-26",t:"Winter break begins",s:"26 Dec – 1 Jan · classes resume 2 Jan",k:"Holiday"},
 {d:"2027-01-14",t:"Makar Sankranti",s:"Holiday · no classes",k:"Holiday"},
 {d:"2027-01-16",t:"Pre-annual mock test",s:"All subjects · full syllabus",k:"Test"},
 {d:"2027-01-26",t:"Republic Day",s:"Holiday · flag hoisting at 8:00 AM",k:"Holiday"},
 {d:"2027-02-15",t:"Annual Examinations",s:"15 – 25 February",k:"Exam"}
];
const SYLLABUS = [
 ["November",["Physics: Friction, Sound","Chemistry: Coal and Petroleum","Maths: Squares and Square Roots","Biology: Microorganisms"]],
 ["December",["Physics: Light","Chemistry: Combustion and Flame","Maths: Mensuration","Biology: Crop Production"]],
 ["January",["Full revision","Pre-annual mock test","Doubt-clearing marathon"]],
 ["February",["Annual Examinations"]]
];

const DPP_TOPICS = [
 {t:"Upthrust and displaced water",hist:[40,55,70],status:"weak"},
 {t:"Reading a spring-balance scale",hist:[50,75],status:"improving"},
 {t:"Force is not stored",hist:[60,90],status:"strong"},
 {t:"Net force",hist:[45,60],status:"improving"}
];
const DPP_TODAY = { title:"DPP 6 · Upthrust and forces", day:6, of:14, qs:[
 {q:"A wooden boat floats on water. Which statement best explains why?",o:["Wood is lighter than iron","The water it pushes aside weighs as much as the boat","Air below the boat holds it up","Water has no weight"],a:1,topic:"Upthrust",hint:"Think about how much water the boat pushes aside and what that water weighs.",sol:"An object floats when the upthrust equals its weight. Upthrust equals the weight of the water displaced, so the boat floats when the water it pushes aside weighs as much as the boat."},
 {q:"A spring balance reads from 0 to 10 N and has 20 equal divisions. What is its least count?",o:["2 N","0.2 N","0.5 N","5 N"],a:2,topic:"Spring balance",hint:"Least count = range ÷ number of divisions.",sol:"Least count = 10 N ÷ 20 = 0.5 N. Dividing the other way round (20 ÷ 10) is the common mistake."},
 {q:"An egg sinks in fresh water but floats in salt water. Why?",o:["Salt makes the egg lighter","Salt water is denser, so it gives more upthrust","The egg absorbs the salt","Fresh water pulls the egg down"],a:1,topic:"Upthrust",hint:"Which liquid is heavier for the same volume?",sol:"Salt water is denser than fresh water. For the same volume pushed aside, it weighs more, so the upthrust is greater and the egg floats."},
 {q:"Which statement about force is correct?",o:["A heavy moving truck has more force stored inside it","Force acts only while two objects interact","Force stays in a ball after it is thrown","Only living things can apply force"],a:1,topic:"Nature of force",hint:"Is force something an object carries, or something that happens between objects?",sol:"Force is a push or a pull that comes from an interaction. It is not stored inside an object. Once the hand leaves the ball, it no longer pushes it."},
 {q:"Two children pull a box in opposite directions with 45 N and 15 N. What is the net force?",o:["60 N towards the 45 N side","30 N towards the 45 N side","30 N towards the 15 N side","0 N"],a:1,topic:"Net force",hint:"Opposite directions: subtract the smaller force from the larger one.",sol:"Net force = 45 N − 15 N = 30 N, in the direction of the larger force (45 N)."},
 {q:"On the same balance (least count 0.5 N), the pointer stops at the 7th division. What is the reading?",o:["7 N","3.5 N","1.4 N","0.7 N"],a:1,topic:"Spring balance",hint:"Reading = number of divisions × least count.",sol:"Reading = 7 × 0.5 N = 3.5 N."}
]};
let DPP_HISTORY = [
 {d:"20 Nov",t:"DPP 5 · Upthrust basics",s:7,of:10,done:true},
 {d:"19 Nov",t:"DPP 4 · Spring-balance readings",s:8,of:10,done:true},
 {d:"18 Nov",t:"DPP 3 · Force is not stored",s:9,of:10,done:true},
 {d:"17 Nov",t:"DPP 2 · Upthrust introduction",s:5,of:10,done:true},
 {d:"16 Nov",t:"DPP 1 · Net force",s:0,of:10,done:false}
];

const AI_SUGGEST = [
 {subj:"Physics",q:"Why does a boat float but a coin sinks?",a:"Let's work it out together.\n\n<b>Hint 1:</b> When something is put in water, the water pushes it up. This push is called <b>upthrust</b>. What decides how big this push is?\n\n<b>Hint 2:</b> Upthrust equals the weight of the water the object pushes aside (displaces). A boat is wide and hollow. Does it push aside a lot of water or a little?\n\n<b>Answer:</b> The boat's shape lets it push aside a large amount of water, enough to equal its own weight, so it floats. A coin is small and solid. It pushes aside very little water, so the upthrust is less than its weight and it sinks.\n\n📘 See <b>Physics · Ch 3 · Upthrust</b> for 5 PYQs on this topic."},
 {subj:"Physics",q:"How do I find the least count of a spring balance?",a:"<b>Hint 1:</b> Look at the scale. What is the largest reading it can show (its range)?\n\n<b>Hint 2:</b> Count how many equal divisions the scale has between 0 and that largest reading.\n\n<b>Method:</b> Least count = range ÷ number of divisions.\n\n<b>Example:</b> 0–10 N with 20 divisions → 10 ÷ 20 = <b>0.5 N</b>.\n\n⚠️ Common mistake: dividing the other way (20 ÷ 10 = 2). Always put the range on top."},
 {subj:"Physics",q:"What is friction? Give an everyday example.",a:"<b>Hint 1:</b> Rub your palms together quickly. What do you feel, and is it easy or hard to move them?\n\n<b>Hint 2:</b> Surfaces look smooth but have tiny bumps that lock into each other.\n\n<b>Answer:</b> Friction is the force that opposes motion between two surfaces in contact. It is caused by these tiny bumps interlocking.\n\n<b>Everyday example:</b> We can walk because friction between our shoes and the ground stops us from slipping. On a wet, soapy floor there is less friction, so we slip."},
 {subj:"Maths",q:"How do I solve 3x + 5 = 20?",a:"<b>Hint 1:</b> We want x alone on one side. What is added to 3x?\n\n<b>Hint 2:</b> Subtract 5 from both sides. What do you get?\n\n<b>Step 1:</b> 3x + 5 − 5 = 20 − 5 → 3x = 15\n<b>Step 2:</b> Divide both sides by 3 → x = 5\n\n<b>Check:</b> 3 × 5 + 5 = 20 ✓\n\nTry this one yourself: 4x − 7 = 21."},
 {subj:"Chemistry",q:"What are the three conditions needed for combustion?",a:"<b>Hint:</b> Think of a candle. What does it need to start burning, and what happens if you cover it with a glass?\n\n<b>Answer:</b> The three conditions are:\n1. A <b>fuel</b> (wax, wood, LPG)\n2. <b>Oxygen</b> from the air\n3. Reaching the <b>ignition temperature</b>\n\nRemove any one and the fire goes out. That is why covering a candle with a glass puts it out: the oxygen runs out."},
 {subj:"Biology",q:"Why is the cell called the unit of life?",a:"<b>Hint 1:</b> What is the smallest part of your body that is still alive on its own?\n\n<b>Hint 2:</b> Think about structure (what we are made of) and function (what keeps us alive).\n\n<b>Answer:</b> Every living thing is made of cells (structural unit), and every life process like breathing, digestion and growth happens inside cells (functional unit). So the cell is called the structural and functional unit of life."}
];

const NOTIFS = [
 {id:1,ic:"report",t:"New Parent Report available",s:"Physics Unit Test – Exploring Forces · 25/35",w:"2h ago",go:["parentReport",{id:"phy-oct"}],unread:true},
 {id:2,ic:"heart",t:"Wellbeing & Counselling report shared",s:"From the November counselling session",w:"Yesterday",go:["wellbeing",{}],unread:true},
 {id:3,ic:"dpp",t:"Today's DPP is ready",s:"DPP 6 · Upthrust and forces · 6 questions",w:"Today, 7:00 AM",go:["dpp",{}],unread:true},
 {id:4,ic:"cal",t:"PTM on Sunday, 22 November",s:"10:00 AM – 1:00 PM at Veda Vidya campus",w:"2 days ago",go:["attendance",{seg:"plan"}],unread:false},
 {id:5,ic:"cal",t:"Holiday: Guru Nanak Jayanti",s:"No classes on Tuesday, 24 November",w:"3 days ago",go:["attendance",{seg:"plan"}],unread:false},
 {id:6,ic:"book",t:"New notes uploaded",s:"Physics · Ch 3 · Upthrust revision notes",w:"4 days ago",go:["chapter",{s:"phy",c:3}],unread:false},
 {id:7,ic:"test",t:"Unit Test – Chemistry on 5 December",s:"Coal and Petroleum · Combustion and Flame",w:"5 days ago",go:["attendance",{seg:"plan"}],unread:false},
 {id:8,ic:"check",t:"Attendance this month: 93%",s:"Great going! Keep it above 85%.",w:"1 week ago",go:["attendance",{}],unread:false}
];

