const STUDY_MATERIALS = [
  // WEEK 1: History & Studying Cognition
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Cognitive Psychology (Definition)", expl: "The study of mental processes, representations, and activities, focusing on how knowledge is acquired, stored, dealt with, and manipulated." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Empiricism (John Locke, Aristotle)", expl: "Argues that knowledge comes entirely from an individual's experiences. Proposed the 'blank slate' (tabula rasa) concept where associations of mental images form the contents of the mind." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Nativism (Plato, Rene Descartes)", expl: "Argues that knowledge is innate, biologically determined, and comes from heredity. Plato used the analogy of memories as writings on a 'wax tablet'." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Structuralism (William Wundt, 1879)", expl: "The first scientific school of psychology (Leipzig, Germany). Proposed that mental activity can be broken down into basic elements (sensations and feelings) akin to physical sciences." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Functionalism (William James)", expl: "Direct reaction to Structuralism. Focused on the functions and purpose of specific mental activities in real-life contexts, drawing heavily from Darwinian evolution." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Gestalt School", expl: "Proposed that the whole is always more than the sum of its parts. Breaking a mental experience (like a movie or a song) into basic elements destroys the combined, unified experience." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Behaviorism (Watson, Skinner, Clark Hull)", expl: "Rejected the study of unobservable hidden mental states. Strictly studied observable stimulus, response, and consequences. Failed because it couldn't explain complex behaviors like language." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "The Cognitive Revolution", expl: "Started with the advent of computers. Researchers (Herbert Simon, Alan Newell, Noam Chomsky) modeled the working of the human mind as an information-processing system." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Mind-Brain Analogy Limitation", expl: "While computers are hardware running uniform software, the mind (software) and brain (hardware) are biologically unified. You cannot transport a human mind to different hardware." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Structure-Process Tradeoff", expl: "The difficulty in distinguishing whether longer mental processing time is due to a complex serial process (more processes) or a complex brain structure managing parallel processes." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Information Processing Approach", expl: "Views cognition as information passing through systems. Stages: Environment → Attention (Filter) → Short-term Memory (Rehearsal) → Long-term Memory (Categorization via schemas/trees)." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Connectionism (Parallel Distributed Processing)", expl: "Argues that small neuronal units connect to give rise to mental experiences. Instead of large sequential systems, computation occurs via excitatory/inhibitory weights propagating across a network." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Evolutionary Approach", expl: "Proposes that specialized cognitive abilities (like 3D perception and language) are biologically ingrained through natural selection and evolutionary heritage." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Ecological Approach", expl: "Asserts that cognitive activities operate in specific cultural contexts. For example, processing differs widely between individualistic (Western) and collectivist (Asian) cultures." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Dissociation (Brain Studies)", expl: "Occurs when a variable/task affects one mental process or brain area but leaves another completely unaffected (e.g., loading visual working memory does not disrupt auditory memory)." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Association (Brain Studies)", expl: "Occurs when two seemingly different cognitive tasks or inputs consistently activate the exact same shared brain region or representational structure." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Behavioral Methods", expl: "Measure observable phenomena like Accuracy (percentage correct), Response Time (processing speed), Judgments (rating scales), and Verbal Protocol (speaking thoughts aloud)." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Ceiling & Floor Effects", expl: "Limitations in behavioral accuracy methods: Tasks are incredibly too easy (ceiling) or impossibly too hard (floor), preventing accurate measurement of cognitive variations." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Speed-Accuracy Tradeoff", expl: "A core behavioral limitation: As participants try to be more accurate, their response time slows down, creating an inverse relationship." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Experimental Expectancy Effect", expl: "When participants subconsciously adjust their behavioral responses to match what they believe the experimenter wants or expects from the task." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Correlational Neural Methods", expl: "Techniques (EEG, PET, fMRI) that correlate mental events with localized brain activity. However, correlation does not prove that an area causes the mental event." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "EEG (Electroencephalogram) & ERPs", expl: "Records weak electrical scalp potentials. Detects Event-Related Potentials (ERPs) like p300 (novelty). Excellent temporal (millisecond) resolution, but extremely poor spatial resolution." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "MEG (Magnetoencephalography)", expl: "Captures magnetic fields generated by neurons. Offers excellent temporal AND spatial resolution with low invasiveness, but the purchase/operational costs are massive." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "PET (Positron Emission Tomography)", expl: "Injects radioactive isotope (e.g., Oxygen-15). Measures blood flow to activated areas. Good spatial resolution, but very poor temporal resolution (takes 40s) and high invasiveness." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "MRI & fMRI", expl: "Uses strong electromagnets to measure BOLD (Blood Oxygen Level Dependent) signals. Superior spatial (millimeter) resolution, moderate temporal resolution, and zero invasiveness." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Optical Imaging", expl: "Shines near-infrared lasers into the brain; reflected light determines blood flow. Safe and low cost, but restricted to surface cortical activities with poor resolution." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Causal Neural Methods", expl: "Methods that temporarily or permanently disrupt a brain region (lesions, TMS, specific drugs) to establish if that region is strictly necessary for a cognitive task." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "TMS (Transcranial Magnetic Stimulation)", expl: "Employs an external magnetic coil to temporarily inhibit or excite targeted cortical neurons (e.g., rTMS causing temporary virtual lesions without permanent damage)." },
  { week: 1, topic: "History", topicIcon: "<i data-lucide='scroll'></i>", q: "Process vs. Neural Network Models", expl: "Process models use sequence flowcharts (input -> scan -> output) to outline logical steps. Neural network models explicitly simulate brain states via nodes, hidden layers, and interconnected weights." },

  // WEEK 2: Perception
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Sensation vs. Perception", expl: "Sensation is the raw, physiological intake of physical stimuli (e.g., light waves to retina). Perception is the psychological interpretation of that stimuli, converting it into a meaningful percept." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Distal vs. Proximal Stimulus", expl: "The distal stimulus is the actual object out in the real world. The proximal stimulus is the inverted, 2D sensory image that falls directly onto the retina." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Size Constancy", expl: "The percept remains stable even when the proximal stimulus drastically changes. For example, your hand's size on the retina grows as it moves closer, but you still perceive the hand as the same size." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Gestalt: Figure-Ground Perception", expl: "The most fundamental step in Gestalt perception. We instantly divide any visual field into a distinct 'figure' that commands attention and a 'background' that is ignored (e.g., reversible faces/vase illusion)." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Gestalt: Law of Pragnanz", expl: "The overarching Gestalt principle meaning 'good figure'. We automatically perceive the simplest, most stable, and most regular interpretation of a visual scene possible." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Gestalt Principles of Organization", expl: "Five specific rules governing grouping: Proximity (near items grouped), Similarity (like items grouped), Good Continuation (curved contours grouped), Closure (filling gaps), and Common Fate (moving together grouped)." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Bottom-Up Processing", expl: "A strictly data-driven procedure where perception is built starting purely from specific raw stimulus features up to a mental generalization, heavily reliant on sensory input without prior expectation." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Template Matching Model", expl: "A simplistic bottom-up theory asserting the brain contains exact stencils/templates for objects. Flawed because it cannot explain how we read sloppy handwriting or recognize entirely novel versions of objects." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Feature Analysis Model", expl: "A robust bottom-up theory. We perceive by breaking an object down into fundamental traits (e.g., edges, curves). Supported biologically by 'edge detectors' and 'bug detectors' found in frog specific retinal cells." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Biederman's Geons", expl: "A feature analysis theory proposing 36 fundamental 3D geometric shapes ('geons', like cylinders, blocks). Biederman argued any object can be constructed simply by rearranging these 36 geon building blocks." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Selfridge's Pandemonium Model", expl: "A feature analysis model using 'demons'. Feature demons shout when they see specific lines/curves, passing to letter demons, and finally to a decision demon. Highlights how basic inputs aggregate sequentially without feedback." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Prototype Matching Model", expl: "An updated bottom-up theory. We form an idealized abstract 'prototype' based on various object exposures. New stimuli are judged not by exact stencil matching, but by how closely they resemble the flexible prototype." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Top-Down Processing", expl: "A conceptually-driven procedure. Processing is heavily influenced by the observer's expectations, prior knowledge, and the context in which the object appears. Also called 'Theory Driven'." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Perceptual Learning", expl: "A top-down phenomenon where visual discrimination strictly improves with practice and exposure. (e.g., Gibson's coil experiment, where subjects gradually learned to distinguish subtle coil differences over time)." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Change Blindness", expl: "The failure to detect major visual changes in a scene because our top-down expectations dictate what should be there. We process the 'gist' of the scene rather than storing every pixel of information." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Word Superiority Effect", expl: "A classic top-down effect. Letters are significantly easier to perceive, identify, and recall when presented in the context of a real word compared to being presented in isolation or in a non-word string." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "David Marr's Computational Model", expl: "An elegant synthesis. Three stages: The bottom-up Primal Sketch (2D light/dark) and 2.5D Sketch (shading/depth), concluding with the top-down 3D Representation which incorporates memory and context." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Gibson's Direct Perception", expl: "An ecological theory arguing top-down/bottom-up aren't needed. The environment contains incredibly rich information inherently. Observers simply extract meaning without mental construction (supported by his point-light walker actor studies)." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Affordances (Gibson)", expl: "In Direct Perception, objects overtly dictate their function. A chair provides the affordance of sitting; a round knob affords turning. The perceptual environment tells the observer strictly what behaviors are allowable." },
  { week: 2, topic: "Perception", topicIcon: "<i data-lucide='eye'></i>", q: "Neisser's Perceptual Cycle", expl: "Harmonized constructivist and direct perception views. Hypothesizes that cognitive schemas dictate where we look in the environment, the environment gives us direct information, which in turn modifies our cognitive schemas." },

  // WEEK 3: Attention
  { week: 3, topic: "Attention", topicIcon: "<i data-lucide='target'></i>", q: "Selective Attention & Dichotic Listening",
    expl: "Cherry (1953) had participants 'shadow' one ear's message. Result: They could notice physical changes in the unattended ear (gender of speaker) but missed semantic content (language changes, specific words)." },
  { week: 3, topic: "Attention", topicIcon: "<i data-lucide='target'></i>", q: "Broadbent's Early Filter Theory (1958)",
    expl: "Postulated a strict bottleneck filter operating purely on physical characteristics (pitch, location). Information on the rejected channel is completely lost before processing for meaning." },
  { week: 3, topic: "Attention", topicIcon: "<i data-lucide='target'></i>", q: "Triesman's Attenuation Model",
    expl: "Addressed flaws in Broadbent's model (e.g., the Cocktail Party Effect where you hear your name). The filter does not block entirely; it 'turns down' unattended channels. Highly salient words have a low threshold and can break through." },
  { week: 3, topic: "Attention", topicIcon: "<i data-lucide='target'></i>", q: "Automatic vs. Controlled Processing",
    expl: "Automatic processing is fast, inflexible, requires no conscious intention, and consumes negligible resources. Controlled processing is slow, deliberate, sequential, and heavily taxes cognitive load." },
  { week: 3, topic: "Attention", topicIcon: "<i data-lucide='target'></i>", q: "The Stroop Effect",
    expl: "Demonstrates automaticity overriding controlled control: naming ink color is significantly slower when the word spells out a conflicting color name, because reading the text is highly automatic." },

  // WEEK 4: Memory Introduction & Short-Term Memory
  { week: 4, topic: "Memory & Working Memory", topicIcon: "<i data-lucide='brain'></i>", q: "Atkinson-Shiffrin Modal Model (1968)",
    expl: "The classic box model with three stores: Sensory Register (high capacity, very brief), Short-Term Memory (limited capacity, brief duration), and Long-Term Memory (theoretically infinite)." },
  { week: 4, topic: "Memory & Working Memory", topicIcon: "<i data-lucide='brain'></i>", q: "STM Capacity & Chunking",
    expl: "George Miller determined STM capacity to be 'the magical number 7, plus or minus 2' items. We bypass this via 'chunking', grouping raw items into meaningful, larger cognitive units." },
  { week: 4, topic: "Memory & Working Memory", topicIcon: "<i data-lucide='brain'></i>", q: "Baddeley's Working Memory Model",
    expl: "Replaced the unitary STM structure. It’s an active manipulation space, not just a passive store. Controlled by a Central Executive, which manages two slave systems: the Phonological Loop and the Visuospatial Sketchpad." },

  // WEEK 5: Long-Term Memory Encoding
  { week: 5, topic: "Long-Term Memory", topicIcon: "<i data-lucide='book-open'></i>", q: "Levels of Processing Theory (Craik & Lockhart)",
    expl: "Challenged the modal model by arguing memory strength relies on processing depth, not separate boxes. Deep (semantic) processing yields stronger, longer-lasting memories than shallow (structural/orthographic) encoding." },
  { week: 5, topic: "Long-Term Memory", topicIcon: "<i data-lucide='book-open'></i>", q: "Elaborative vs. Maintenance Rehearsal",
    expl: "Maintenance rehearsal (simple rote repetition) only holds items in STM temporarily. Elaborative rehearsal (connecting new info to existing semantic networks) successfully facilitates transfer into LTM." },
  { week: 5, topic: "Long-Term Memory", topicIcon: "<i data-lucide='book-open'></i>", q: "Encoding Specificity Principle",
    expl: "Tulving showed that memory is improved when conditions at retrieval match conditions at encoding. E.g., learning underwater means testing better underwater (context-dependent memory)." },

  // WEEK 6: Semantic Memory Basics
  { week: 6, topic: "Semantic Memory", topicIcon: "<i data-lucide='network'></i>", q: "Episodic vs Semantic Memory",
    expl: "Episodic memory relates to specific autographical events tied to a time and place ('mental time travel'). Semantic memory is decontextualized factual knowledge about the world." },
  { week: 6, topic: "Semantic Memory", topicIcon: "<i data-lucide='network'></i>", q: "Hierarchical Network Model (Collins & Quillian)",
    expl: "Semantic memory stores concepts in related nodes. Lower nodes inherit properties of higher nodes ('cognitive economy'). Response time in verifying 'A canary is a bird' depends on how many logical 'links' must be traversed." },

  // WEEK 7: Concepts & Categories
  { week: 7, topic: "Concepts & Categories", topicIcon: "<i data-lucide='folder-open'></i>", q: "Classical Definition Theory of Categories",
    expl: "The old view that categories consist of lists of necessary and sufficient features. Failed because most real-world items have fuzzy boundaries and gradients of typicality." },
  { week: 7, topic: "Concepts & Categories", topicIcon: "<i data-lucide='folder-open'></i>", q: "Prototype Theory (Eleanor Rosch)",
    expl: "We classify items by comparing them to an idealized, average representation (prototype) of that category. Highly typical members (like a Robin for 'bird') are verified much faster than atypical ones (like a Penguin)." },

  // WEEK 8: Visual Memory
  { week: 8, topic: "Visual Memory", topicIcon: "<i data-lucide='image'></i>", q: "Analog vs Propositional Imagery",
    expl: "Analog theory argues we store images pictorially (like looking at a physical picture). Propositional theory argues imagery is an epiphenomenon, and we actually store descriptive, symbolic mental lists." },
  { week: 8, topic: "Visual Memory", topicIcon: "<i data-lucide='image'></i>", q: "Mental Rotation (Shepard & Metzler)",
    expl: "Strong evidence for analog representation. The time to decide if two complex 3D shapes match increases completely linearly with the rotational angle difference, proving we physically 'rotate' the mental image in our mind's eye." },

  // WEEK 9: Human Language Skills
  { week: 9, topic: "Human Language Skills", topicIcon: "<i data-lucide='message-square'></i>", q: "Phonemes vs. Morphemes",
    expl: "Phonemes are the raw, basic distinct sounds of a language (e.g., /k/, /a/, /t/). Morphemes are the smallest units of language that carry distinct meaning (words, prefixes, or suffixes like 'un-' or '-ed')." },
  { week: 9, topic: "Human Language Skills", topicIcon: "<i data-lucide='message-square'></i>", q: "Syntax vs. Semantics",
    expl: "Syntax refers to the structural grammar rules governing proper sentence composition. Semantics refers to evaluating the conceptual meaning. 'Colorless green ideas sleep furiously' has perfect syntax but flawed semantics." },

  // WEEK 10: Thought Processes & Problem Solving
  { week: 10, topic: "Thought Processes & Problem Solving", topicIcon: "<i data-lucide='puzzle'></i>", q: "Algorithms vs. Heuristics",
    expl: "Algorithms are rigid mathematical formulas/procedures that guarantee a correct answer, but can be incredibly slow. Heuristics are mental 'rules of thumb' that are fast and efficient but prone to errors." },
  { week: 10, topic: "Thought Processes & Problem Solving", topicIcon: "<i data-lucide='puzzle'></i>", q: "Functional Fixedness & Set Effects",
    expl: "Functional fixedness is the cognitive bias limiting a person to use an object only in the way it is traditionally used (e.g., a box is just for holding things, not as a candle stand), thus hindering creative problem solving." },

  // WEEK 11: Reasoning
  { week: 11, topic: "Reasoning", topicIcon: "<i data-lucide='scale'></i>", q: "Deductive Reasoning",
    expl: "Applying generalized logic to draw an explicitly certain specific conclusion (e.g., categorical syllogisms). If the premises are true and the logic is valid, the conclusion is 100% indisputable." },
  { week: 11, topic: "Reasoning", topicIcon: "<i data-lucide='scale'></i>", q: "Inductive Reasoning",
    expl: "Drawing generalized, probable conclusions purely from specific observations. Used heavily in scientific theorization, but never provides absolute, logical 100% certainty." },

  // WEEK 12: Decision Making
  { week: 12, topic: "Decision Making", topicIcon: "<i data-lucide='dice-5'></i>", q: "Expected Utility Theory vs Prospect Theory",
    expl: "Expected Utility is a normative model stating humans rationally calculate probability × value. Tversky & Kahneman's Prospect Theory (descriptive model) proved human irrationality: humans overweigh small probabilities and are notoriously 'loss averse'." },
  { week: 12, topic: "Decision Making", topicIcon: "<i data-lucide='dice-5'></i>", q: "Loss Aversion & Framing Effects",
    expl: "Losses psychologically hurt more than identical gains feel good. Consequently, if a problem is framed as 'saving lives', people avoid risks. If framed as 'preventing deaths', people embrace extreme risks to avoid definite losses." }
];

// Append the unified property for rendering in quiz.html correctly
STUDY_MATERIALS.forEach(sm => {
  sm.isSupplementary = true;
});
