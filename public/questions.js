const QUESTIONS = [
  {
    "id": 1,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "Which philosophical position holds that knowledge comes primarily from heredity and innate biological factors?",
    "opts": [
      "Empiricism",
      "Nativism",
      "Functionalism",
      "Behaviorism"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Nativism (associated with Plato, Descartes) argues knowledge is inbuilt through heredity, contrasting with empiricism's view that knowledge comes from experience."
  },
  {
    "id": 2,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "John Locke's concept of the mind at birth is best described as:",
    "opts": [
      "A wax tablet full of innate ideas",
      "A blank slate (tabula rasa)",
      "A hierarchical network",
      "A parallel processor"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Locke argued that the mind at birth is a blank slate (tabula rasa) and that all knowledge comes from experience."
  },
  {
    "id": 3,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "William Wundt established the first scientific psychology laboratory in which year and city?",
    "opts": [
      "1859, London",
      "1879, Leipzig",
      "1900, Vienna",
      "1913, New York"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Wundt founded the first experimental psychology laboratory in Leipzig, Germany in 1879, marking the birth of scientific psychology."
  },
  {
    "id": 4,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "Wundt's structuralism attempted to study consciousness by:",
    "opts": [
      "Observing only external behaviour and stimulus-response associations",
      "Breaking mental processes into basic sensations and feelings",
      "Studying evolutionary adaptations and their role in cognition",
      "Mapping neural networks and their connections across brain regions"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Structuralism broke consciousness into its component sensations and feelings, analogous to how chemistry breaks compounds into elements."
  },
  {
    "id": 5,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "Which school of psychology argued that the function of mental processes—not their structure—is what matters?",
    "opts": [
      "Structuralism",
      "Gestalt",
      "Functionalism",
      "Connectionism"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Functionalism, associated with William James and influenced by Darwin, focused on how mental processes function and adapt rather than their component parts."
  },
  {
    "id": 6,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "The Gestalt principle that 'the whole is always more than the sum of its parts' directly opposes which school?",
    "opts": [
      "Functionalism",
      "Behaviorism",
      "Structuralism",
      "Connectionism"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "Gestalt psychology opposed structuralism's reductionist approach, arguing that breaking mental experience into parts destroys the meaning of the whole."
  },
  {
    "id": 7,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "Behaviorism, as championed by Skinner, insisted that psychology should study only:",
    "opts": [
      "Mental images and consciousness",
      "Stimulus, response, and consequences",
      "Neural firing patterns",
      "Evolutionary adaptations"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Behaviorism rejected unobservable mental states and focused exclusively on observable stimulus-response relationships and their consequences."
  },
  {
    "id": 8,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "The cognitive revolution was largely triggered by the development of:",
    "opts": [
      "Brain imaging techniques and neural scanning methods",
      "Computers and information processing models",
      "Evolutionary biology and natural selection theory",
      "Psychoactive drugs and pharmacological research"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The development of computers gave cognitive psychologists a model for understanding mental processes as information processing, sparking the cognitive revolution."
  },
  {
    "id": 9,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "Which paradigm views cognition as information passing through a series of processing systems?",
    "opts": [
      "Connectionism",
      "Evolutionary approach",
      "Information processing approach",
      "Ecological approach"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "The information processing approach models cognition as information flowing through systems (sensory memory → STM → LTM), each performing specific operations."
  },
  {
    "id": 10,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "Connectionism (parallel distributed processing) proposes that mental experience arises from:",
    "opts": [
      "A single central processor that handles all tasks sequentially",
      "Many small interconnected units with weighted connections",
      "A hierarchy of schemas organized by levels of abstraction",
      "Evolutionary modules each dedicated to specific cognitive tasks"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Connectionism holds that cognition emerges from networks of many small units connected with varying weights, not from a single large symbolic processor."
  },
  {
    "id": 11,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "The evolutionary approach to cognitive psychology emphasises that some cognitive abilities, such as language and depth perception, are:",
    "opts": [
      "Learned entirely through experience",
      "Inbuilt through natural selection",
      "Products of cultural context",
      "Dependent on working memory capacity"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The evolutionary approach argues that certain cognitive competencies are biologically prepared through natural selection, not purely learned."
  },
  {
    "id": 12,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "The ecological approach to cognition stresses that cognitive activities:",
    "opts": [
      "Operate independently of environmental or social influences",
      "Are shaped by the culture and context in which they occur",
      "Are primarily determined by innate biological mechanisms",
      "Follow universal principles regardless of cultural setting"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The ecological approach holds that cognition is always embedded in cultural and environmental context, which shapes how information is processed."
  },
  {
    "id": 13,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "In Sternberg's memory search experiment, as the length of the memorised list increased, verification time:",
    "opts": [
      "Decreased",
      "Stayed the same",
      "Increased linearly",
      "Increased exponentially"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "Sternberg found that verification time increased linearly with list length, supporting a serial exhaustive search model of memory access."
  },
  {
    "id": 14,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "The Atkinson-Shiffrin modal model of memory includes which three stores?",
    "opts": [
      "Iconic, echoic, haptic",
      "Sensory register, short-term memory, long-term memory",
      "Phonological loop, visuospatial sketchpad, central executive",
      "Episodic, semantic, procedural"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The Atkinson-Shiffrin (1968) modal model proposes three sequential stores: sensory register, short-term memory, and long-term memory."
  },
  {
    "id": 15,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "Plato's metaphor for memory compared it to:",
    "opts": [
      "A computer hard drive",
      "Writings on a wax tablet",
      "A filing cabinet",
      "A neural network"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Plato described memory as writings on a wax tablet; the strength and clarity of the impressions determined the strength of memories."
  },
  {
    "id": 16,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "Which behavioural method measures the percentage of correct responses to assess processing effectiveness?",
    "opts": [
      "Reaction time",
      "Accuracy",
      "Protocol analysis",
      "Judgment rating"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The accuracy method records the percentage of correct responses, providing an objective measure of how effectively a mental process is working."
  },
  {
    "id": 17,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "The 'ceiling effect' in accuracy measurement occurs when:",
    "opts": [
      "A task is too difficult and everyone scores near minimum",
      "A task is too easy and everyone scores at maximum",
      "The measured response times are too variable to be analysed",
      "The number of trials is too small to detect any differences"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "A ceiling effect occurs when a task is so easy that all participants score at the maximum, making it impossible to detect differences in processing."
  },
  {
    "id": 18,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "The speed-accuracy trade-off means that as accuracy requirements increase:",
    "opts": [
      "Speed also increases",
      "Speed decreases (more time is needed)",
      "Both speed and accuracy improve",
      "Neither changes"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "There is an inverse relationship: demanding higher accuracy forces slower, more careful processing, reducing speed."
  },
  {
    "id": 19,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "In the protocol analysis method, participants are asked to:",
    "opts": [
      "Rate their confidence on a numerical scale after each trial",
      "Verbally announce what they are doing mentally",
      "Press a button as quickly as possible in response to a stimulus",
      "Recall a list of previously presented items from memory"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Protocol analysis (think-aloud) requires participants to verbalise their ongoing mental steps, revealing the sequence of cognitive processes."
  },
  {
    "id": 20,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "EEG (electroencephalography) is characterised by excellent temporal resolution but poor:",
    "opts": [
      "Depth sensitivity",
      "Signal-to-noise ratio",
      "Spatial resolution",
      "Spectral resolution"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "EEG records electrical potentials from the scalp with millisecond precision (excellent temporal resolution) but cannot pinpoint the exact brain region (poor spatial resolution)."
  },
  {
    "id": 21,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "MEG (magnetoencephalography) records which type of brain signal?",
    "opts": [
      "Electrical potentials from the surface of the scalp",
      "Magnetic fields generated by neuronal activity",
      "Blood oxygen level changes in active brain regions",
      "Radioactive tracer accumulation in neural tissue"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "MEG captures the tiny magnetic fields produced by neuronal electrical activity, offering both good spatial and temporal resolution."
  },
  {
    "id": 22,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "PET scanning using the O-15 isotope works by detecting:",
    "opts": [
      "Changes in blood oxygenation measured through magnetic resonance",
      "Accumulation of radioactive oxygen in active brain regions",
      "Magnetic fields produced by electrical currents in neurons",
      "Electrical potentials recorded from electrodes on the scalp"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "PET with O-15 water detects increased blood flow (and thus radioactive oxygen accumulation) in brain regions active during a cognitive task."
  },
  {
    "id": 23,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "fMRI measures brain activity by detecting:",
    "opts": [
      "Electrical potentials recorded from the scalp surface",
      "Blood oxygen level-dependent (BOLD) signal",
      "Magnetic fields generated by active neuron groups",
      "Radioactive decay of injected oxygen isotopes"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "fMRI uses the BOLD signal—the ratio of oxygenated to deoxygenated blood—to infer which brain regions are active during a task."
  },
  {
    "id": 24,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "Transcranial Magnetic Stimulation (TMS) is classified as a causal method because it:",
    "opts": [
      "Records electrical activity produced by groups of neurons",
      "Temporarily disrupts activity in a specific brain region",
      "Measures blood flow changes associated with neural activation",
      "Detects magnetic fields generated by post-synaptic currents"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "TMS uses magnetic pulses to temporarily disrupt neural activity in a targeted region, allowing researchers to establish causal links between that region and behaviour."
  },
  {
    "id": 25,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "A dissociation in cognitive neuroscience occurs when:",
    "opts": [
      "Two tasks are both impaired equally by the same brain lesion",
      "A variable affects performance on one task but not another",
      "Multiple brain regions activate simultaneously during a single task",
      "Performance on two tasks improves equally after the same training"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Dissociation is demonstrated when a manipulation (e.g., brain lesion or task load) impairs one cognitive process but leaves another intact, suggesting they rely on different mechanisms."
  },
  {
    "id": 26,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "An association in cognitive neuroscience is found when:",
    "opts": [
      "Two different processes activate the same brain region",
      "A single process activates two entirely different brain regions",
      "One process is impaired while another remains completely intact",
      "Two processes show opposite patterns of performance under load"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "An association occurs when two different cognitive processes converge on the same brain area, suggesting shared neural mechanisms."
  },
  {
    "id": 27,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "The 'experimental expectancy effect' is a limitation of which behavioural method?",
    "opts": [
      "Accuracy",
      "Reaction time",
      "Protocol analysis",
      "Judgment rating"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "In reaction time studies, participants may detect the experimenter's expectations and adjust their response speed accordingly, confounding results."
  },
  {
    "id": 28,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "Optical imaging of the brain works on the principle that:",
    "opts": [
      "The brain emits detectable radio wave frequencies",
      "Neurons generate measurable external magnetic fields",
      "Blood contains naturally radioactive oxygen isotopes",
      "The brain is transparent to certain light wavelengths"
    ],
    "ans": 3,
    "diff": "hard",
    "expl": "Optical imaging uses near-infrared light, which passes through brain tissue; the speed of reflection varies with blood flow, indicating neural activity."
  },
  {
    "id": 29,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "Box models in cognitive psychology represent:",
    "opts": [
      "Neural network weights and their interconnection strengths",
      "Discrete processing stages connected by arrows",
      "Brain anatomy diagrams showing structural neuronal pathways",
      "Evolutionary modules dedicated to specialized cognitive tasks"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Box models (e.g., Atkinson-Shiffrin) depict cognition as a series of discrete processing boxes (stages) connected by arrows showing information flow."
  },
  {
    "id": 30,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "Which method has the highest invasiveness among the neural correlational methods?",
    "opts": [
      "EEG",
      "MEG",
      "PET",
      "fMRI"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "PET requires injection of a radioactive isotope into the bloodstream, making it the most invasive of the common neuroimaging correlational methods."
  },
  {
    "id": 31,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "The object as it physically exists in the environment is called the:",
    "opts": [
      "Proximal stimulus",
      "Percept",
      "Distal stimulus",
      "Pattern recognition"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "The distal stimulus is the actual object in the environment. The proximal stimulus is the image it casts on the retina, and the percept is the brain's interpretation."
  },
  {
    "id": 32,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "The inverted image formed on the retina is called the:",
    "opts": [
      "Distal stimulus",
      "Proximal stimulus",
      "Percept",
      "Pattern"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The proximal stimulus is the retinal image—the physical representation of the distal stimulus on the sensory surface."
  },
  {
    "id": 33,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Pattern recognition is best defined as:",
    "opts": [
      "Detecting the basic physical features of a stimulus like edges and colour",
      "Recognising an object as belonging to a particular class",
      "Separating a figure from its background in the visual field",
      "Maintaining stable perception of objects despite changing conditions"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Pattern recognition is the process of comparing incoming sensory information with stored representations to classify an object or event."
  },
  {
    "id": 34,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "The Gestalt principle of proximity states that objects that are close together are:",
    "opts": [
      "Perceived as having the same colour and shape",
      "Perceived as belonging together",
      "Perceived as forming a single continuous line",
      "Perceived as part of a completed figure"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Proximity: nearby elements are grouped perceptually, even if they differ in other properties."
  },
  {
    "id": 35,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Which Gestalt principle explains why we see alternating rows of red and white dots as two separate rows?",
    "opts": [
      "Proximity",
      "Similarity",
      "Good continuation",
      "Closure"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Similarity: elements that share visual features (colour, shape) are grouped together, so red dots cluster with red and white with white."
  },
  {
    "id": 36,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "The Gestalt principle of good continuation suggests that we group elements whose contours form:",
    "opts": [
      "Randomly oriented segments and angles",
      "Straight or smoothly curved lines",
      "Closed and symmetrical shapes",
      "Overlapping and intersecting patterns"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Good continuation: elements that form a smooth, continuous line or curve are grouped together, even if they could be parsed differently."
  },
  {
    "id": 37,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "When the brain 'fills in' a gap to perceive an incomplete circle as a whole circle, this illustrates:",
    "opts": [
      "Proximity",
      "Good continuation",
      "Closure",
      "Common fate"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Closure: the perceptual system completes incomplete figures, filling gaps to create the simplest, most complete interpretation."
  },
  {
    "id": 38,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "The Gestalt principle of common fate groups objects that:",
    "opts": [
      "Share the same colour or texture",
      "Are located close to each other",
      "Move in the same direction",
      "Form a smooth continuous contour"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Common fate: elements moving in the same direction at the same speed are perceived as belonging to the same group."
  },
  {
    "id": 39,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "The Law of Pragnanz (Prägnanz) states that perception tends toward:",
    "opts": [
      "The most complex and detailed interpretation possible",
      "The simplest and most stable interpretation",
      "The interpretation most consistent with past experience",
      "The interpretation closest to the physical stimulus"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Pragnanz (good form): the perceptual system always seeks the simplest, most regular, and most stable interpretation of a stimulus."
  },
  {
    "id": 40,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Size constancy refers to the perceptual tendency to:",
    "opts": [
      "Perceive objects as larger when they are closer to the observer",
      "Perceive an object's size as stable despite changes in retinal image size",
      "Perceive an object's shape as changing when viewed from different angles",
      "Perceive the brightness of objects as varying with illumination changes"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Size constancy: we perceive objects as the same size regardless of distance, even though the retinal image shrinks as objects move away."
  },
  {
    "id": 41,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Reversible figures (e.g., the old/young woman illusion) demonstrate that:",
    "opts": [
      "All perceptual processing occurs in the primary visual cortex alone",
      "The same proximal stimulus can yield different percepts depending on figure-ground assignment",
      "Object recognition requires only simple template matching mechanisms",
      "Neural pathways for perception and action share the same processing"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Reversible figures show that perception is not determined solely by the stimulus; top-down factors like attention and expectation influence which interpretation dominates."
  },
  {
    "id": 42,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Gibson's concept of 'affordances' refers to:",
    "opts": [
      "The physical properties of light reaching the retina from objects",
      "The action possibilities an object offers to an observer",
      "The stored representations of objects in long-term memory",
      "The sensory features detected by specialised receptor cells"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Gibson argued that when we perceive an object we also directly perceive its affordances—the actions it invites (e.g., a chair affords sitting)."
  },
  {
    "id": 43,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "In figure-ground perception, which statement is true?",
    "opts": [
      "The ground is perceived as having a more clearly defined shape",
      "The figure tends to have better-defined shape and is remembered better",
      "Figure and ground are always perceived with equal visual clarity",
      "The ground is typically smaller and more visually salient than the figure"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Figures have clearer contours and are remembered better; backgrounds are less defined and serve as context for the figure."
  },
  {
    "id": 44,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Sensation differs from perception in that sensation:",
    "opts": [
      "Involves active interpretation and organisation of sensory information",
      "Is the raw input detected by sensory organs before interpretation",
      "Requires prior knowledge and expectations to process stimuli",
      "Occurs only after the brain assigns meaning to incoming signals"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Sensation is the detection of physical energy by sensory receptors; perception is the subsequent interpretation and meaning-making process."
  },
  {
    "id": 45,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Which Gestalt principle is considered the overarching law that encompasses all other principles?",
    "opts": [
      "Law of Proximity",
      "Law of Similarity",
      "Law of Pragnanz",
      "Law of Closure"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "The Law of Pragnanz is the master principle: the perceptual system always seeks the simplest, most stable organisation, which underlies all other Gestalt principles."
  },
  {
    "id": 46,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Selective attention is best described as:",
    "opts": [
      "Processing multiple sensory inputs at the same time with full accuracy on each",
      "Focusing cognitive resources on one stimulus while filtering others",
      "Switching rapidly between different tasks without any reduction in performance",
      "Filtering out irrelevant information to focus on a single conversation partner"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Selective attention is the ability to focus on one stimulus or task while ignoring competing stimuli, acting like a filter on incoming information."
  },
  {
    "id": 47,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "The dichotic listening task, designed by Cherry in 1953, involves:",
    "opts": [
      "Channel switches are detected even when content is maintained across both ears",
      "Participants receiving different messages in each ear and shadowing one",
      "Meaningful information on the rejected channel is completely lost and undetected",
      "Participants can always report all the semantic content presented to both ears"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "In Cherry's dichotic listening task, different messages are presented to each ear via headphones, and participants shadow (repeat aloud) one ear's message."
  },
  {
    "id": 48,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "'Shadowing' in the dichotic listening paradigm means:",
    "opts": [
      "Writing down the words heard in the designated ear as they arrive",
      "Repeating aloud whatever is heard in the designated ear",
      "Pressing a response button whenever a target word is detected",
      "Counting the number of words presented in the designated ear"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Shadowing requires participants to immediately repeat aloud the message from the attended ear, ensuring active attention to that channel."
  },
  {
    "id": 49,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "From Cherry's (1953) experiment, participants could report which of the following from the unattended ear?",
    "opts": [
      "The specific words that were spoken",
      "The language the message was in",
      "The gender of the speaker",
      "The topic of the unattended message"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "Cherry found that from the unattended ear, participants could detect physical properties like the speaker's gender, whether it was speech or noise, and speech direction—but not the content or language."
  },
  {
    "id": 50,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Broadbent's filter theory (1958) proposes that the attentional filter operates based on:",
    "opts": [
      "Semantic meaning of messages and their underlying conceptual relationships",
      "Physical properties of stimuli (e.g., pitch, location)",
      "Emotional significance and the personal relevance of the incoming stimulus",
      "Prior knowledge and long-term memory associations linked to the stimulus"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Broadbent's early-selection filter theory holds that the filter selects messages based on physical characteristics (location, pitch, loudness) before semantic analysis."
  },
  {
    "id": 51,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "The cocktail party phenomenon, described by Moray (1959), demonstrates that:",
    "opts": [
      "Information is selected for full processing late after semantic analysis occurs",
      "One's own name can penetrate the attentional filter from the unattended channel",
      "Information is selected at multiple flexible stages depending on task demands",
      "No selection takes place and all sensory channels are processed equally fully"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Moray showed that personally significant stimuli (like one's own name) can break through the attentional filter from the unattended channel, challenging Broadbent's strict filter theory."
  },
  {
    "id": 52,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Broadbent's filter theory is classified as an 'early selection' model because:",
    "opts": [
      "A multi-stage flexible model that selects at different points depending on load",
      "Selection occurs based on physical features before semantic processing",
      "A late-selection model where all inputs receive full semantic processing first",
      "A parallel processing model where all channels are processed simultaneously"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Early selection models (like Broadbent's) propose that the filter acts on physical features before the message is analysed for meaning, blocking unattended messages early."
  },
  {
    "id": 53,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "In Broadbent's filter theory, what happens to unattended messages?",
    "opts": [
      "They are fully processed for meaning and then forgotten rapidly",
      "They are held briefly in a sensory buffer and then blocked",
      "They are attenuated but still partially analysed for meaning",
      "They bypass the filter entirely and enter long-term memory"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Broadbent proposed that unattended messages are held briefly in a pre-attentive sensory buffer but are blocked by the filter before semantic processing."
  },
  {
    "id": 54,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Attention span refers to:",
    "opts": [
      "The number of items that can be attended to simultaneously",
      "The duration for which attention can be maintained on a single stimulus",
      "The speed at which attention can switch between two different tasks",
      "The minimum stimulus intensity needed to capture focused attention"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Attention span is the length of time a person can concentrate on a particular stimulus or task before attention shifts elsewhere."
  },
  {
    "id": 55,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "According to Broadbent, two messages can both be processed when:",
    "opts": [
      "Both messages contain rich and meaningful semantic content",
      "The messages contain minimal information or are presented very slowly",
      "The listener is highly motivated to attend to both channels",
      "The messages are presented in two different spoken languages"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Broadbent allowed that two channels could be processed simultaneously only if each contained very little information or was presented at a slow rate, not exceeding cognitive capacity."
  },
  {
    "id": 56,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Treisman's experiment where the attended message switched ears showed that participants:",
    "opts": [
      "Continued shadowing the original message for a few words after the switch",
      "Immediately followed the switch to the new ear without hesitation",
      "Stopped shadowing entirely and failed to track either message",
      "Reported the content of both ears equally well during the task"
    ],
    "ans": 0,
    "diff": "hard",
    "expl": "Treisman found that participants continued to shadow the original message for a few words even after it switched ears, demonstrating that 100% attention was devoted to the content, not the physical channel."
  },
  {
    "id": 57,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "William James' early view on attention was that it:",
    "opts": [
      "Is equally distributed across all sensory channels at once",
      "Can only be focused on one stimulus at a time",
      "Improves with practice until multiple tasks can be handled",
      "Is determined entirely by stimulus salience rather than will"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "James argued that attention can only be truly focused on one thing at a time; apparent multi-tasking reflects rapid switching rather than true simultaneous attention."
  },
  {
    "id": 58,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "The dichotic listening task is useful for studying attention because:",
    "opts": [
      "It measures brain activity while participants listen to speech",
      "It creates a controlled situation where one channel is attended and one is not",
      "It allows participants to freely choose which ear to attend to",
      "It presents the same message to both ears at different speeds"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "By having participants shadow one ear, the dichotic task creates a clear attended vs. unattended channel, allowing researchers to study what information passes the attentional filter."
  },
  {
    "id": 59,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Moray (1959) found that approximately what percentage of participants heard their own name from the unattended ear?",
    "opts": [
      "10%",
      "50%",
      "30%",
      "70%"
    ],
    "ans": 2,
    "diff": "hard",
    "expl": "Moray reported that about 30% of participants detected their own name in the unattended channel, showing that personally significant stimuli can penetrate the filter."
  },
  {
    "id": 60,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "The primary reason studying attention is methodologically challenging is that:",
    "opts": [
      "Attention shifts too rapidly to be captured by any recording technique",
      "Instructing participants not to attend to something causes them to attend to it",
      "Participants cannot reliably report what they were attending to during tasks",
      "Individual differences in attention span make group comparisons difficult"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The paradox of attention research is that telling someone not to pay attention to something immediately draws their attention to it, making experimental control difficult."
  },
  {
    "id": 61,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Treisman's attenuation theory differs from Broadbent's filter theory in that unattended messages are:",
    "opts": [
      "Completely blocked so that nothing from the unattended channel gets through at all",
      "Attenuated (reduced in strength) rather than fully blocked",
      "Processed for its full semantic meaning just like the attended channel of speech",
      "Stored permanently in long-term memory for later retrieval during recall testing"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Treisman proposed that the filter attenuates (turns down the volume of) unattended messages rather than blocking them entirely, allowing important stimuli to still reach awareness."
  },
  {
    "id": 62,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Late selection theory proposes that the attentional bottleneck occurs:",
    "opts": [
      "Before any semantic analysis of the incoming messages",
      "After messages have been analysed for meaning",
      "At the sensory register before any perceptual processing",
      "At multiple flexible stages depending on task demands"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Late selection models argue that all incoming messages are processed for meaning, and selection occurs later—at the stage of response or conscious awareness."
  },
  {
    "id": 63,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Johnston and Heinz's (1978) multimodal theory states that attentional selection can occur at:",
    "opts": [
      "Only one fixed and invariant stage of attentional selection",
      "Three flexible stages depending on task demands",
      "Only the semantic level is used for filtering information",
      "Only the physical feature level is available for selection"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The multimodal theory proposes three stages of selection (sensory, semantic, combined), with the stage used depending on how similar the competing messages are."
  },
  {
    "id": 64,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "In Kahneman's capacity model, 'enduring dispositions' refer to:",
    "opts": [
      "Long-term interests and habits that guide attention allocation",
      "Momentary environmental demands that capture our attention",
      "The total amount of available cognitive resources at any time",
      "The current arousal level and its effect on task performance"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "Enduring dispositions are stable personal interests and habits (e.g., a musician attending to music) that influence how attentional resources are allocated."
  },
  {
    "id": 65,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "In Kahneman's capacity model, 'momentary intentions' are:",
    "opts": [
      "Searching slowly through each item in the display in a serial one-by-one manner",
      "Immediate, context-driven goals that redirect attention",
      "Distributing attention equally across all display items regardless of their features",
      "Combining individual features into objects which then requires no focused attention"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Momentary intentions are transient, goal-directed states (e.g., deciding to listen for a specific word) that temporarily redirect attentional allocation."
  },
  {
    "id": 66,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Kahneman's capacity model proposes that the total available attentional capacity is influenced by:",
    "opts": [
      "Task difficulty",
      "Arousal level",
      "Practice effects",
      "Memory capacity"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Kahneman argued that arousal level modulates the total pool of available cognitive capacity—higher arousal generally increases available capacity up to an optimal point."
  },
  {
    "id": 67,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Neisser's schema theory of attention proposes that unattended stimuli are:",
    "opts": [
      "Not perceived at all—attention works as an all-or-none system",
      "Attenuated but still processed at a deeper semantic level",
      "Stored temporarily in a dedicated sensory memory buffer",
      "Processed for physical features only and then fully discarded"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "Neisser's schema theory treats attention as all-or-none: what you don't attend to is simply not perceived, like unpicked fruit remaining on a tree."
  },
  {
    "id": 68,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Inattentional blindness refers to the failure to notice:",
    "opts": [
      "Objects that are positioned too far below the standard visual acuity threshold",
      "Unexpected objects or events that appear in plain sight when attention is focused elsewhere",
      "Changes in the colour or brightness of the objects that are currently attended",
      "Objects that are presented specifically to the unattended ear during shadowing"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Inattentional blindness occurs when attention is fully engaged on a task, causing people to miss unexpected but clearly visible stimuli (e.g., the gorilla in the ball-passing experiment)."
  },
  {
    "id": 69,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Schneider and Shiffrin (1977) distinguished between consistent mapping and varied mapping. In consistent mapping:",
    "opts": [
      "Target and distractor sets overlap and change unpredictably between trials",
      "Target items are always targets and distractors are always distractors, enabling automaticity",
      "Participants must search exhaustively through every item on every single trial",
      "Reaction time increases linearly with set size regardless of practice amount"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Consistent mapping (same items always targets) leads to automatic detection after practice; varied mapping (targets and distractors swap) requires controlled search throughout."
  },
  {
    "id": 70,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "According to Snyder and Posner (1975), automatic processes are characterised by which three criteria?",
    "opts": [
      "Slow processing, high effort, and strong reliance on working memory",
      "No intention, no conscious awareness, and no interference with other tasks",
      "Extensive training, conscious monitoring, and careful sustained attention",
      "High cognitive load, serial processing, and vulnerability to distraction"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Automatic processes (Snyder & Posner) require no intention to initiate, occur without conscious awareness, and do not interfere with concurrent tasks."
  },
  {
    "id": 71,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Treisman's feature integration theory proposes that in the pre-attentive stage:",
    "opts": [
      "Complete objects are identified as unified wholes before features",
      "Individual features are registered in parallel without attention",
      "Features are combined into objects through serial focused attention",
      "Only a single feature can be processed from the entire visual field"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "In the pre-attentive stage, basic features (colour, orientation, size) are registered automatically and in parallel across the visual field without focused attention."
  },
  {
    "id": 72,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Illusory conjunctions in feature integration theory occur when:",
    "opts": [
      "Attention is spread too thinly across multiple objects in the visual field",
      "Features from different objects are incorrectly combined due to insufficient attention",
      "Objects are recognised too quickly for their features to be properly bound",
      "The visual system deliberately swaps features between adjacent objects"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Illusory conjunctions happen when attention is overloaded or absent; features from nearby objects are incorrectly bound together (e.g., seeing a red X when there is a red O and a blue X)."
  },
  {
    "id": 73,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "The 'pop-out' phenomenon in visual search occurs when:",
    "opts": [
      "A target shares features with distractors and requires serial search to find",
      "A target has a unique feature that makes it immediately salient regardless of display size",
      "A target is detected faster when it appears at a previously cued location",
      "A target becomes harder to detect as the number of distractors increases"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Pop-out occurs when a target differs from distractors on a single basic feature (e.g., a red item among green items); it is detected pre-attentively and search time does not increase with set size."
  },
  {
    "id": 74,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "The psychological refractory period (PRP) refers to:",
    "opts": [
      "The improvement in performance when a stimulus is preceded by a valid cue",
      "The delay in responding to a second stimulus when it closely follows a first",
      "The inability to detect a second target appearing soon after a first target",
      "The gradual decline in vigilance during a prolonged monitoring task"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The PRP is the slowing of response to a second stimulus (S2) when it is presented shortly after a first stimulus (S1), because the cognitive system is still processing S1."
  },
  {
    "id": 75,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "Attentional capture refers to:",
    "opts": [
      "The voluntary directing of attention to a specific spatial location",
      "The involuntary drawing of attention by a salient or unexpected stimulus",
      "The gradual narrowing of attention under conditions of high stress",
      "The deliberate suppression of information from an irrelevant source"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Attentional capture is the automatic, involuntary shift of attention toward a stimulus that is physically salient (e.g., sudden onset, high contrast) or personally significant."
  },
  {
    "id": 76,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "In the Atkinson-Shiffrin modal model, which store holds information for the briefest duration?",
    "opts": [
      "Short-term memory",
      "Long-term memory",
      "Sensory register",
      "Working memory"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "The sensory register (sensory memory) holds information for a fraction of a second to a few seconds before it decays or is transferred to STM."
  },
  {
    "id": 77,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "The primacy effect in the serial position curve is attributed to:",
    "opts": [
      "Items at the end of a list being held in short-term memory stores",
      "Items at the beginning of a list having been rehearsed into LTM",
      "Items in the middle being the most distinctive and easily encoded",
      "Recency of presentation making all list items equally accessible"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Early list items benefit from more rehearsal opportunities, allowing them to be transferred to LTM, producing better recall—the primacy effect."
  },
  {
    "id": 78,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "The recency effect in the serial position curve is attributed to:",
    "opts": [
      "Auditory information held very briefly in a sensory store before further processing",
      "Items at the end still being in STM at the time of recall",
      "Permanent records of all information that was ever attended to during perception",
      "A rapid initial encoding stage that transfers information immediately into memory"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The most recently presented items are still in STM at the time of recall, producing the recency effect—better recall for the last few items."
  },
  {
    "id": 79,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Iconic memory is the sensory store for which modality?",
    "opts": [
      "Auditory",
      "Haptic",
      "Visual",
      "Olfactory"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Iconic memory is the brief visual sensory store; echoic memory is auditory, and haptic memory is for touch."
  },
  {
    "id": 80,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Sperling's (1960) partial-report experiments demonstrated that iconic memory:",
    "opts": [
      "Has a very small capacity limited to about four items at most",
      "Holds a large amount of visual information but it decays very rapidly",
      "Persists for several seconds allowing detailed inspection of the image",
      "Stores information permanently in an accurate photographic format"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Sperling showed that the iconic store holds nearly all items from a briefly presented array, but the information decays within about 250–500 ms, so only a partial report is possible."
  },
  {
    "id": 81,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Miller's (1956) 'magical number' for STM capacity is:",
    "opts": [
      "3 ± 1 chunks",
      "5 ± 1 chunks",
      "7 ± 2 chunks",
      "12 ± 3 chunks"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Miller proposed that STM can hold approximately 7 ± 2 chunks of information, regardless of the complexity of each chunk."
  },
  {
    "id": 82,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Chunking in STM refers to:",
    "opts": [
      "Repeating items to keep them active in short-term memory",
      "Grouping individual items into larger meaningful units to increase effective capacity",
      "Encoding items according to their visual appearance and shape",
      "Organising items by their emotional significance and personal relevance"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Chunking reorganises individual items into larger meaningful units (e.g., remembering 'FBI' as one chunk rather than three letters), effectively expanding STM capacity."
  },
  {
    "id": 83,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Conrad's (1964) experiment showed that errors in STM recall tend to be:",
    "opts": [
      "Visually similar to the target",
      "Acoustically similar to the target",
      "Semantically similar to the target",
      "Randomly distributed with no consistent pattern"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Conrad found that STM errors involved acoustically similar letters (e.g., B confused with P, V), suggesting STM uses primarily acoustic/phonological coding."
  },
  {
    "id": 84,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "The Brown-Peterson task is used to study:",
    "opts": [
      "The capacity limits of short-term memory storage",
      "Decay of information from STM when rehearsal is prevented",
      "The role of interference in long-term memory forgetting",
      "The effect of chunking on memory span performance"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "In the Brown-Peterson task, participants recall a trigram after a filled delay (counting backwards) that prevents rehearsal, demonstrating rapid decay from STM."
  },
  {
    "id": 85,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Proactive interference in STM occurs when:",
    "opts": [
      "New information interferes with recall of old information",
      "Old information interferes with recall of new information",
      "Information simply decays over time without any interference",
      "Rehearsal prevents all forms of forgetting from occurring"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Proactive interference: previously learned material interferes with the learning and recall of new material (old interferes forward with new)."
  },
  {
    "id": 86,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Wickens and Born's (1963) 'release from proactive interference' demonstrated that:",
    "opts": [
      "Increasing the number of items per trial eliminates interference",
      "Switching to a new category of items reduces proactive interference",
      "Repeating the same category over many trials strengthens memory",
      "Using acoustically similar items creates stronger interference"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "When the category of items changed (e.g., from numbers to letters), recall improved dramatically—'release from PI'—showing that PI is category-specific."
  },
  {
    "id": 87,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "The Waugh-Norman probe digit task was designed to test which theory of STM forgetting?",
    "opts": [
      "Decay theory",
      "Interference theory",
      "Displacement theory",
      "Consolidation theory"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Waugh and Norman used the probe digit task to pit decay against interference; they found that interference (number of intervening items) was the primary cause of STM forgetting."
  },
  {
    "id": 88,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Sternberg's serial search model of STM proposes that memory search is:",
    "opts": [
      "Parallel and self-terminating",
      "Serial and exhaustive",
      "Parallel and exhaustive",
      "Serial and self-terminating"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Sternberg proposed that STM search is serial (one item at a time) and exhaustive (the entire list is scanned before a response is made), supported by the linear increase in RT with list length."
  },
  {
    "id": 89,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Echoic memory is the sensory store for which modality?",
    "opts": [
      "Visual",
      "Auditory",
      "Haptic",
      "Olfactory"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Echoic memory is the auditory sensory store, holding sounds for approximately 3–4 seconds—longer than iconic memory's ~250 ms."
  },
  {
    "id": 90,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Which of the following best describes the capacity of long-term memory?",
    "opts": [
      "Limited to about 7 ± 2 items",
      "Approximately 4 chunks at most",
      "Effectively unlimited",
      "Fixed at exactly 10 items"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Unlike STM, LTM is considered to have effectively unlimited capacity; there is no known upper bound on how much information can be stored in LTM."
  },
  {
    "id": 91,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The working memory model was proposed by:",
    "opts": [
      "Atkinson and Shiffrin",
      "Baddeley and Hitch",
      "Broadbent and Treisman",
      "Craik and Lockhart"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Baddeley and Hitch (1974) proposed the working memory model as a replacement for the unitary STM concept, comprising multiple specialised components."
  },
  {
    "id": 92,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The central executive in Baddeley's working memory model is responsible for:",
    "opts": [
      "Coordinating the slave systems and allocating attentional resources",
      "Storing and rehearsing phonological information in verbal form",
      "Maintaining visual-spatial information and manipulating images",
      "Providing a direct link between working memory and long-term memory"
    ],
    "ans": 0,
    "diff": "easy",
    "expl": "The central executive is the supervisory component that controls and coordinates the phonological loop and visuospatial sketchpad, and allocates attentional resources."
  },
  {
    "id": 93,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The phonological loop consists of which two sub-components?",
    "opts": [
      "Central executive and episodic buffer",
      "Phonological buffer and articulatory rehearsal process",
      "Visual cache and inner scribe",
      "Sensory register and attentional filter"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The phonological loop has a phonological store (holds sound-based information for ~2 seconds) and an articulatory rehearsal process (the 'inner voice' that refreshes the store)."
  },
  {
    "id": 94,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The visuospatial sketchpad in working memory is responsible for:",
    "opts": [
      "Coordinating and allocating attention among the different subsystems of working memory",
      "Maintaining and manipulating visual and spatial information",
      "Storing and rehearsing auditory and verbal information through a continuous speech loop",
      "Integrating information from working memory with knowledge stored in long-term memory"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The visuospatial sketchpad (the 'inner eye') holds and manipulates visual images and spatial information, such as mental maps or object shapes."
  },
  {
    "id": 95,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The episodic buffer, added by Baddeley in 2000, serves to:",
    "opts": [
      "Replace the central executive with a fully automatic processing module",
      "Provide a temporary multi-modal store that links working memory components with LTM",
      "Store only visual-spatial information and ignore other modalities",
      "Rehearse phonological information through the articulatory control loop"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The episodic buffer is a limited-capacity store that integrates information from the phonological loop, visuospatial sketchpad, and LTM into coherent episodes."
  },
  {
    "id": 96,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The dual-task paradigm is used to study working memory by:",
    "opts": [
      "Having participants perform two tasks simultaneously to identify shared resources",
      "Presenting two lists of words sequentially and comparing their recall",
      "Measuring reaction time to single stimuli under varying cognitive load",
      "Comparing recall of words and pictures under different encoding conditions"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "The dual-task paradigm requires participants to perform two tasks at once; if performance on one task suffers when the other is added, they share a common working memory resource."
  },
  {
    "id": 97,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "In Baddeley and Hitch's (1974) reasoning task with digit load, adding a digit span task:",
    "opts": [
      "Information that sounds different is more easily confused in the phonological store",
      "Slowed reasoning slightly but did not eliminate it",
      "Information that looks similar is more easily confused in the visuospatial sketchpad",
      "Information that shares meaning is more easily confused in the episodic memory buffer"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Baddeley and Hitch found that a concurrent digit span task slowed reasoning but did not prevent it, suggesting that reasoning and verbal rehearsal share some but not all working memory resources."
  },
  {
    "id": 98,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "Which component of working memory would be most disrupted by a concurrent spatial tapping task?",
    "opts": [
      "Central executive",
      "Phonological loop",
      "Visuospatial sketchpad",
      "Episodic buffer"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "A spatial tapping task occupies the visuospatial sketchpad, disrupting tasks that require spatial processing (e.g., mental rotation, navigation)."
  },
  {
    "id": 99,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "Articulatory suppression (repeating 'the, the, the') disrupts which working memory component?",
    "opts": [
      "Central executive",
      "Visuospatial sketchpad",
      "Episodic buffer",
      "Phonological loop"
    ],
    "ans": 3,
    "diff": "medium",
    "expl": "Articulatory suppression occupies the articulatory rehearsal process of the phonological loop, preventing verbal rehearsal and disrupting phonological storage."
  },
  {
    "id": 100,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The word-length effect in working memory refers to the finding that:",
    "opts": [
      "Fewer long words than short words can be held in the phonological loop",
      "Longer words are remembered better due to their distinctive encoding",
      "Words with more syllables are recalled faster from articulatory store",
      "Word length has no measurable effect on short-term memory performance"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "The word-length effect: people can recall more short words than long words from a list, because the articulatory loop can hold about 2 seconds of speech, fitting more short words."
  },
  {
    "id": 101,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The phonological similarity effect shows that STM recall is worse for:",
    "opts": [
      "Words that look visually similar to each other",
      "Words that sound similar to each other",
      "Words that share similar meanings with each other",
      "Words from the same grammatical category"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Phonologically similar words (e.g., cat, bat, hat) are harder to recall from STM because they create confusion in the phonological store."
  },
  {
    "id": 102,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "Working memory is considered more useful than the simple STM concept because it:",
    "opts": [
      "Phonological loop, visuospatial sketchpad, central executive, and episodic buffer",
      "Explains how memory is used during active cognitive tasks like reasoning and comprehension",
      "Sensory memory, short-term memory, and long-term memory as three sequential stores",
      "Iconic memory, echoic memory, and haptic memory as three parallel sensory stores"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Working memory captures the active, dynamic nature of short-term storage—it explains how we hold and manipulate information while performing complex cognitive tasks."
  },
  {
    "id": 103,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "Which component of working memory is most closely associated with language comprehension?",
    "opts": [
      "Central executive",
      "Visuospatial sketchpad",
      "Phonological loop",
      "Episodic buffer"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "The phonological loop supports language comprehension by maintaining the sound of words and sentences while they are being processed."
  },
  {
    "id": 104,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The central executive is analogous to which concept in attention research?",
    "opts": [
      "The phonological loop",
      "Supervisory attentional system (SAS)",
      "The visuospatial sketchpad",
      "The episodic buffer"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "The central executive functions like Norman and Shallice's Supervisory Attentional System—it monitors, controls, and coordinates cognitive processes, especially in novel or difficult situations."
  },
  {
    "id": 105,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "Evidence that the phonological loop and visuospatial sketchpad are separate systems comes from:",
    "opts": [
      "The phonological similarity cost disappears completely when articulatory suppression is applied",
      "Double dissociation: tasks that disrupt one component do not disrupt the other",
      "The phonological similarity cost remains fully intact even during articulatory suppression",
      "Articulatory suppression has no measurable effect on any aspect of working memory at all"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Double dissociation evidence (e.g., articulatory suppression disrupts verbal but not spatial tasks; spatial tapping disrupts spatial but not verbal tasks) confirms the two systems are independent."
  },
  {
    "id": 106,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Baddeley's experiment on LTM coding showed that LTM primarily uses:",
    "opts": [
      "Acoustic coding",
      "Visual coding",
      "Semantic coding",
      "Procedural coding"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "Baddeley demonstrated that LTM errors are semantically similar (not acoustically similar), showing that LTM relies primarily on meaning-based (semantic) encoding."
  },
  {
    "id": 107,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Ebbinghaus's forgetting curve shows that forgetting is:",
    "opts": [
      "Linear and constant over time",
      "Rapid at first and then levels off",
      "Slow at first and then accelerates",
      "Unaffected by the passage of time"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Ebbinghaus found that most forgetting occurs rapidly soon after learning, with the rate of forgetting slowing down over time—a negatively accelerating curve."
  },
  {
    "id": 108,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Craik and Lockhart's levels of processing framework proposes that:",
    "opts": [
      "All levels of processing produce equally durable memory traces",
      "Deeper, more meaningful processing leads to stronger, more durable memories",
      "Shallow processing of physical features produces the strongest memories",
      "The number of repetitions matters more than the depth of processing"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Levels of processing: shallow processing (e.g., physical features) produces weak memories; deep, semantic processing (e.g., meaning) produces stronger, more durable memories."
  },
  {
    "id": 109,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Elaborative rehearsal differs from maintenance rehearsal in that it:",
    "opts": [
      "Connects new information to existing knowledge, producing deeper encoding",
      "Simply repeats information without adding any meaningful associations",
      "Is faster but less effective than maintenance rehearsal for retention",
      "Only works for procedural memories and not for declarative memories"
    ],
    "ans": 0,
    "diff": "easy",
    "expl": "Elaborative rehearsal involves thinking about the meaning of information and connecting it to existing knowledge, producing deeper processing and better LTM encoding than simple repetition."
  },
  {
    "id": 110,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Declarative memory includes which two subtypes?",
    "opts": [
      "Procedural and declarative",
      "Episodic and semantic",
      "Implicit and explicit",
      "Short-term and long-term"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Declarative (explicit) memory is divided into episodic memory (personal events) and semantic memory (general world knowledge)."
  },
  {
    "id": 111,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Procedural memory stores:",
    "opts": [
      "Personal autobiographical events and experiences",
      "General factual knowledge about the world",
      "Skills and how-to knowledge",
      "Conditioned emotional responses"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Procedural memory is implicit memory for skills and procedures (e.g., riding a bike, typing), which are performed without conscious recollection."
  },
  {
    "id": 112,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Priming in LTM refers to:",
    "opts": [
      "The gradual weakening of a memory trace through disuse over time",
      "Improved processing of a stimulus due to prior exposure to a related stimulus",
      "The strengthening of a memory through repeated retrieval practice",
      "The active suppression of unwanted memories to prevent their retrieval"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Priming is an implicit memory effect where prior exposure to a stimulus facilitates faster or more accurate processing of a related stimulus later."
  },
  {
    "id": 113,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Encoding failure theory of forgetting proposes that:",
    "opts": [
      "Information was never properly encoded into LTM in the first place",
      "Information was encoded but cannot be retrieved due to cue failure",
      "Memories were encoded but gradually decay over extended time periods",
      "New memories actively interfere with previously stored older memories"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "Encoding failure: forgetting occurs because the information was never adequately encoded into LTM, so there is nothing to retrieve."
  },
  {
    "id": 114,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "The encoding specificity principle (Tulving) states that:",
    "opts": [
      "Retrieval cues overlap substantially with the way the information was originally encoded",
      "Memory is best when retrieval conditions match encoding conditions",
      "The information has been rehearsed a very large number of times during study sessions",
      "The test uses a recognition format rather than a free recall format for the questions"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Encoding specificity: the cues present at encoding, when reinstated at retrieval, maximise recall—context and state at encoding should match retrieval conditions."
  },
  {
    "id": 115,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "The context-dependent memory effect (Godden & Baddeley's divers experiment) showed that:",
    "opts": [
      "Information learned in a particular physical setting is better recalled in that same setting",
      "Recall is best when the environment at retrieval matches the environment at encoding",
      "Information is recalled equally well regardless of where it was originally encoded at all",
      "Only emotional information benefits from being tested in the same environmental context"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Divers who learned material underwater recalled it better underwater; those who learned on land recalled better on land—demonstrating context-dependent memory."
  },
  {
    "id": 116,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "State-dependent memory refers to better recall when:",
    "opts": [
      "The physical environment at the time of retrieval matches the environment during encoding",
      "The internal physiological/emotional state at retrieval matches the state at encoding",
      "Semantic or elaborative processing was used rather than shallow structural encoding",
      "Spaced practice was used during the learning phase rather than massed study sessions"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "State-dependent memory: recall is better when the internal state (e.g., mood, drug state) at retrieval matches the state at encoding."
  },
  {
    "id": 117,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "The spacing effect (distributed practice) shows that:",
    "opts": [
      "Recognition tests are always superior to recall tests",
      "Spaced practice leads to better long-term retention than massed practice",
      "Massed practice leads to better long-term retention than spaced practice",
      "The distribution of practice has no effect on long-term retention"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The spacing effect: distributing practice over time (spaced practice) produces better long-term retention than the same amount of practice concentrated in one session (massed practice)."
  },
  {
    "id": 118,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Bartlett's 'War of the Ghosts' study demonstrated that LTM recall is:",
    "opts": [
      "Existing memories interfere with the ability to form and retrieve new memories later on",
      "Reconstructive, influenced by schemas and prior knowledge",
      "Newly acquired memories interfere with the retrieval of older previously stored memories",
      "Items presented at the beginning of a list interfere with items presented at the end"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Bartlett showed that participants' recall of an unfamiliar Native American story was systematically distorted to fit their own cultural schemas, demonstrating reconstructive memory."
  },
  {
    "id": 119,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Loftus's eyewitness testimony research showed that:",
    "opts": [
      "Forgetting can result from retrieval failure when appropriate cues are not available",
      "Leading questions can alter the content of eyewitness memories",
      "All forgetting is caused exclusively by the decay of memory traces over elapsed time",
      "Forgetting happens only when original encoding was too shallow for lasting storage"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Loftus demonstrated that post-event information (e.g., leading questions) can be incorporated into memory, altering what witnesses report—showing the malleability of LTM."
  },
  {
    "id": 120,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "The tip-of-the-tongue (TOT) phenomenon is best explained by:",
    "opts": [
      "Complete storage failure—the memory was never formed at all",
      "Interference from related memories blocking access to the target",
      "Partial retrieval—the memory exists but cannot be fully accessed",
      "Permanent erasure of the memory trace from long-term storage"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "TOT states occur when a memory is partially accessible (e.g., knowing the first letter or number of syllables) but cannot be fully retrieved, suggesting retrieval failure rather than encoding failure."
  },
  {
    "id": 121,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "Tulving (1972) distinguished episodic memory from semantic memory. Semantic memory stores:",
    "opts": [
      "General knowledge about the world that is not tied to any specific personal experience",
      "General world knowledge and facts independent of personal experience",
      "Vivid personal memories tied to a specific time and place in the individual's life",
      "Motor skills and habits acquired through repeated physical practice over long periods"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Semantic memory contains general factual knowledge (e.g., 'Paris is the capital of France') that is not tied to a specific personal experience or time."
  },
  {
    "id": 122,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "Episodic memory stores:",
    "opts": [
      "General facts about the world stored independently of any particular personal context",
      "Personal events tied to a specific time and place",
      "Motor skills developed through extensive hands-on practice and physical repetition",
      "Semantic networks that connect all types of memory into one integrated unified system"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Episodic memory is autobiographical memory for personally experienced events, including contextual details of when and where they occurred."
  },
  {
    "id": 123,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "Collins and Quillian's (1969) hierarchical network model proposes that concepts are stored as:",
    "opts": [
      "Concepts and their properties are stored as interconnected nodes in a hierarchical network",
      "Nodes in a hierarchy with properties stored at the highest applicable level (cognitive economy)",
      "All knowledge is stored in a single flat list that is searched sequentially from beginning",
      "Semantic memories are always stored as vivid mental images rather than abstract propositions"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Collins and Quillian's model stores concepts in a hierarchy (e.g., animal → bird → canary) with properties stored at the highest level where they apply, saving storage space (cognitive economy)."
  },
  {
    "id": 124,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "'Cognitive economy' in Collins and Quillian's model means:",
    "opts": [
      "Concepts are always retrieved as quickly as possible regardless of hierarchical location",
      "Properties are stored at the highest applicable node rather than repeated at every lower node",
      "Memory capacity is essentially unlimited with no need for any organizational efficiency",
      "Retrieval of any stored property requires the exact same amount of effort every time"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Cognitive economy: to avoid redundancy, properties shared by all members of a category (e.g., 'has skin' for all animals) are stored once at the superordinate level, not repeated for each subordinate."
  },
  {
    "id": 125,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "A key prediction of Collins and Quillian's model is that verifying 'A canary is an animal' should take longer than 'A canary is a bird' because:",
    "opts": [
      "Verifying properties stored directly at a concept node should be faster than inherited ones",
      "More hierarchical levels must be traversed to reach 'animal'",
      "All properties should be verified at exactly the same speed regardless of storage location",
      "Properties at higher nodes should always be verified faster than locally stored properties"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The model predicts that verification time increases with the number of hierarchical links between the concept and the property node; 'animal' is two levels above 'canary', 'bird' is only one."
  },
  {
    "id": 126,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "The feature comparison model of semantic memory distinguishes between:",
    "opts": [
      "Episodic features tied to personal experience and semantic features about general knowledge",
      "Defining features (necessary) and characteristic features (typical but not necessary)",
      "Superordinate features from broad categories and subordinate features from narrow categories",
      "Visual features based on appearance and verbal features based on linguistic descriptions"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The feature comparison model (Smith et al.) separates defining features (necessary for category membership, e.g., 'has wings' for bird) from characteristic features (typical but not required, e.g., 'can fly')."
  },
  {
    "id": 127,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "Collins and Loftus's (1975) spreading activation model proposes that:",
    "opts": [
      "Shorter distances between interconnected nodes in the network lead to faster retrieval times",
      "Activation spreads from a concept to related concepts along associative links, with strength decreasing with distance",
      "All nodes in the semantic network are retrieved at exactly the same speed every time",
      "Only direct connections matter and indirect connections have no effect on retrieval speed"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Spreading activation: activating one concept (e.g., 'fire') spreads activation to related concepts (e.g., 'red', 'hot', 'truck') along weighted links, facilitating their retrieval."
  },
  {
    "id": 128,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "The typicality effect in semantic memory refers to the finding that:",
    "opts": [
      "All members of a category are verified at exactly the same speed regardless of typicality",
      "Typical members (e.g., robin as a bird) are verified faster than atypical members (e.g., penguin as a bird)",
      "Atypical members are always rejected as non-members rather than just verified more slowly",
      "Category size and total number of exemplars determines the speed of verification entirely"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Typicality effect: typical category members (those sharing more features with the prototype) are verified faster and more accurately than atypical members."
  },
  {
    "id": 129,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "Anderson's ACT-R model includes which three memory components?",
    "opts": [
      "Sensory memory, short-term memory stores, and long-term memory systems",
      "Declarative memory, working memory, and procedural memory (production rules)",
      "Phonological loop, visuospatial sketchpad, and the central executive unit",
      "Episodic memory, semantic memory, and procedural skill-based memory"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "ACT-R (Anderson, 1976) comprises declarative memory (facts), working memory (active information), and procedural memory (production rules: if-then condition-action pairs)."
  },
  {
    "id": 130,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "Scripts in semantic memory are:",
    "opts": [
      "Concepts that have more features in common and are more semantically related to each other",
      "Schematic knowledge structures representing the typical sequence of events in familiar situations",
      "Concepts that are completely unrelated to each other with no shared features whatsoever",
      "Concepts that share a common superordinate category regardless of actual feature overlap"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Scripts (Schank & Abelson) are knowledge structures that represent the typical sequence of events in routine situations (e.g., going to a restaurant), guiding comprehension and behaviour."
  },
  {
    "id": 131,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "Tulving's 'bookshelf metaphor' for semantic memory suggests that:",
    "opts": [
      "Semantic memory is organised alphabetically, like entries in a dictionary",
      "Semantic memory is organised by category, like books on a shelf by topic",
      "Semantic memory is unorganised, with no systematic structure at all",
      "Semantic memory is stored in a single location within the temporal lobe"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Tulving used the bookshelf metaphor to illustrate that semantic memory is organised by category/topic, allowing efficient retrieval of related information."
  },
  {
    "id": 132,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "A limitation of Collins and Quillian's hierarchical network model is that it cannot explain:",
    "opts": [
      "Why verification takes progressively longer as network distance between nodes increases",
      "Typicality effects (e.g., why 'robin is a bird' is verified faster than 'penguin is a bird')",
      "Why cognitive economy reduces the total amount of information stored in the memory system",
      "Why concepts are stored as interconnected nodes rather than isolated independent entries"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "The strict hierarchy predicts equal verification time for all members at the same level, but typicality effects show that typical members are verified faster—a finding the model cannot account for."
  },
  {
    "id": 133,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "In spreading activation models, the strength of activation between two concepts depends on:",
    "opts": [
      "Sentence verification tasks measuring reaction time to category questions",
      "The strength of the associative link between them",
      "Brain imaging studies comparing activation across different concept types",
      "Free association tasks measuring which concepts come to mind first"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "In spreading activation models, activation spreads more strongly along well-established, frequently used associative links and weakens with distance and weaker links."
  },
  {
    "id": 134,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "The false memory effect in semantic memory (e.g., DRM paradigm) occurs because:",
    "opts": [
      "Activating one concept increases the accessibility of semantically related concepts nearby",
      "Spreading activation causes related but unstudied words to be falsely recognised",
      "Activating one concept completely inhibits all other concepts stored in semantic memory",
      "Priming effects occur only when concepts share identical surface-level perceptual features"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "In the DRM paradigm, studying semantically related words (e.g., bed, rest, tired) activates the non-presented associate (sleep), which is then falsely recognised—a consequence of spreading activation."
  },
  {
    "id": 135,
    "week": 6,
    "topic": "Semantic Memory",
    "topicIcon": "🕸️",
    "q": "Production rules in ACT-R are best described as:",
    "opts": [
      "Participants respond faster to targets preceded by a semantically related prime",
      "If-then condition-action pairs that specify how to respond when certain conditions are met",
      "Participants respond slower to targets preceded by a semantically related prime",
      "There is no speed difference regardless of whether the prime is related or unrelated"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Production rules in ACT-R are procedural knowledge in the form 'IF [condition] THEN [action]', specifying how to act when particular conditions are present in working memory."
  },
  {
    "id": 136,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "The classical view of concepts holds that category membership is determined by:",
    "opts": [
      "A set of necessary and sufficient features that every category member must fully possess",
      "Necessary and sufficient defining features",
      "A statistical summary based on the most typical features shared by the majority of members",
      "A collection of individually stored exemplar instances recalled from personal experience"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The classical view: a concept is defined by a set of necessary and sufficient features; an item is a category member if and only if it has all the defining features."
  },
  {
    "id": 137,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "A major problem with the classical view of concepts is that:",
    "opts": [
      "It accurately predicts the graded typicality effects found across different category members",
      "Many natural categories lack clear necessary and sufficient features (e.g., 'game')",
      "It cannot explain the existence of basic-level categories in hierarchical category systems",
      "It requires too much memory storage capacity to be a feasible model of human categorization"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Wittgenstein's 'family resemblance' argument showed that many everyday concepts (e.g., game) have no single set of necessary and sufficient features, undermining the classical view."
  },
  {
    "id": 138,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "The prototype view of concepts proposes that category membership is determined by:",
    "opts": [
      "A strict set of necessary and sufficient defining features",
      "Similarity to the most typical or average member (prototype)",
      "Matching to individually stored exemplar instances in memory",
      "Causal-explanatory theories about why categories exist at all"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Prototype theory: categories are represented by an abstract prototype (the most typical member), and new items are classified by their similarity to this prototype."
  },
  {
    "id": 139,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "The exemplar view of concepts proposes that categories are represented by:",
    "opts": [
      "An abstract prototype representation of the category average",
      "A set of defining features that are necessary and sufficient",
      "Specific remembered instances (exemplars)",
      "Causal theories about underlying category membership rules"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Exemplar theory: categories are represented by stored memories of specific instances; new items are classified by their similarity to these stored exemplars."
  },
  {
    "id": 140,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "Rosch's basic level of categorisation (e.g., 'dog') is preferred over superordinate ('animal') and subordinate ('poodle') levels because:",
    "opts": [
      "It always includes the most physically distinctive features of every category member example",
      "It provides the best balance of informativeness and cognitive efficiency",
      "It is the category level that is always represented by the shortest word in the language",
      "It is the category level that is learned first regardless of culture and language context"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Basic-level categories (e.g., dog, chair) are cognitively privileged: they are the most informative level at which members share many features and are distinct from other categories."
  },
  {
    "id": 141,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "Which level of categorisation is 'furniture' an example of?",
    "opts": [
      "Basic level",
      "Subordinate level",
      "Superordinate level",
      "Prototype level"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "'Furniture' is a superordinate category—it is more abstract and general than the basic level (e.g., 'chair') and the subordinate level (e.g., 'rocking chair')."
  },
  {
    "id": 142,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "The schema-based view of concepts emphasises that:",
    "opts": [
      "Concepts are defined by necessary features that all members share",
      "Concepts are embedded in broader knowledge structures (schemas) that provide context",
      "Concepts are represented by prototypes or the most average member",
      "Concepts are stored as individual exemplars without abstract summary"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The schema-based view holds that concepts are understood within the context of larger knowledge structures (schemas), which provide background knowledge and expectations."
  },
  {
    "id": 143,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "The knowledge-based (theory-based) view of concepts proposes that categorisation is driven by:",
    "opts": [
      "Surface similarities such as colour, shape, and size",
      "Causal and explanatory theories about why things belong together",
      "Statistical averaging of all category members encountered",
      "Strict adherence to formal dictionary definitions and rigid rules"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The knowledge-based view: people use implicit theories and causal knowledge (not just surface similarity) to determine category membership and understand why members belong together."
  },
  {
    "id": 144,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "Bruner's concept attainment study examined how people:",
    "opts": [
      "They store all exemplars in a detailed memory database for matching",
      "Discover the rule defining a concept through hypothesis testing",
      "They use a prototype to judge similarity for all category decisions",
      "They rely on innate knowledge structures to assign category membership"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Bruner's concept attainment studies investigated the strategies people use to identify the rule (concept) from a series of positive and negative instances."
  },
  {
    "id": 145,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "In Bruner's concept attainment, 'conservative focusing' involves:",
    "opts": [
      "Testing one hypothesis at a time by changing one attribute per trial",
      "A brief period of focused attention on one feature while deliberately ignoring all others",
      "Long-term exposure to category exemplars that gradually builds up intuitive knowledge",
      "Rote memorization of every defining feature listed in a formal category definition"
    ],
    "ans": 0,
    "diff": "hard",
    "expl": "Conservative focusing: start with a positive instance as a focus card, then change one attribute at a time; if the result is positive, that attribute is irrelevant; if negative, it is relevant."
  },
  {
    "id": 146,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "'Simultaneous scanning' in Bruner's concept attainment means:",
    "opts": [
      "Selecting one hypothesis and testing it against every available instance sequentially",
      "Considering all possible hypotheses at once and eliminating those inconsistent with each instance",
      "Starting with a positive instance and changing one attribute per trial systematically",
      "Randomly choosing instances without following any particular hypothesis at all"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Simultaneous scanning: the learner considers all possible hypotheses simultaneously and eliminates those ruled out by each new instance—cognitively demanding but thorough."
  },
  {
    "id": 147,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "The typicality gradient in prototype theory predicts that:",
    "opts": [
      "All category members are equally typical and equally easy to categorise",
      "Some members are more typical (closer to the prototype) and are processed faster",
      "Atypical members are not considered real category members by most people",
      "Typicality is irrelevant to categorisation speed and accuracy judgments"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Prototype theory predicts a typicality gradient: members closer to the prototype are judged as better examples and are categorised faster and more accurately."
  },
  {
    "id": 148,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "Similarity-based categorisation differs from explanation-based categorisation in that:",
    "opts": [
      "Similarity-based uses causal theories to explain membership while explanation-based uses surface features only",
      "Similarity-based groups items by shared features; explanation-based groups items by shared causal/theoretical relationships",
      "They are identical approaches that always produce the same classification judgments for all items",
      "Explanation-based classification is always more accurate than similarity-based classification in all cases"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Similarity-based categorisation relies on perceptual or feature overlap; explanation-based (theory-based) categorisation relies on causal and theoretical relationships between features."
  },
  {
    "id": 149,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "Which finding is most problematic for the exemplar view of concepts?",
    "opts": [
      "The finding that basic-level categories are processed faster than superordinate categories",
      "The ability to categorise novel items never encountered before",
      "The typicality effect where some members are judged as better examples than others",
      "The fact that many natural categories do not have sharp boundaries"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "The exemplar view struggles to explain how people can categorise entirely novel items they have never seen before, since there are no stored exemplars to compare them to."
  },
  {
    "id": 150,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "'Successive scanning' in Bruner's concept attainment involves:",
    "opts": [
      "Testing one hypothesis at a time, moving to the next if it is disconfirmed",
      "Testing all hypotheses simultaneously by gathering maximal information",
      "Focusing on a positive instance and changing multiple attributes at once",
      "Randomly selecting instances without following any systematic strategy"
    ],
    "ans": 0,
    "diff": "hard",
    "expl": "Successive scanning: the learner tests one hypothesis at a time; if disconfirmed, they move to the next hypothesis—simple but slow and potentially inefficient."
  },
  {
    "id": 151,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Paivio's dual coding hypothesis proposes that:",
    "opts": [
      "All information is stored in a single verbal propositional code format",
      "Information can be stored in both verbal and imagistic codes, and dual coding enhances memory",
      "Visual information is always remembered better than any verbal material",
      "Imagery has no measurable effect on memory encoding or later retrieval"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Dual coding theory: concrete words and pictures are encoded in both verbal and imagistic systems, providing two retrieval routes and enhancing memory compared to abstract words encoded only verbally."
  },
  {
    "id": 152,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Bower's (1970) relational-organisational hypothesis showed that memory for word pairs improves when:",
    "opts": [
      "Words are rehearsed repeatedly using the phonological loop mechanism",
      "Words are encoded as interacting images rather than separate images",
      "Words are presented in alphabetical order to improve serial recall",
      "Words are kept abstract rather than concrete to strengthen associations"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Bower found that forming interactive images (e.g., a dog riding a bicycle) for word pairs produced far better recall than forming separate, non-interacting images."
  },
  {
    "id": 153,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "The method of loci is a mnemonic technique that involves:",
    "opts": [
      "Associating each item with a rhyming word from a fixed peg word list in numerical order",
      "Mentally placing items to be remembered at specific locations along a familiar route",
      "Forming interacting images for word pairs by combining them into a unified visual scene",
      "Repeating each item aloud multiple times to strengthen the phonological memory trace"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Method of loci: items are mentally placed at specific locations along a well-known route; at recall, the person mentally 'walks' the route and retrieves each item from its location."
  },
  {
    "id": 154,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "The peg word method uses:",
    "opts": [
      "Associating each item with a location along a familiar mental route",
      "A pre-memorised set of rhyming words (one=bun, two=shoe) as pegs for new items",
      "Forming interactive mental images linking two items together",
      "Organising items into categories based on shared semantic features"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The peg word system: a set of rhyming peg words (one-bun, two-shoe, etc.) is memorised; new items are then associated with each peg word via vivid imagery."
  },
  {
    "id": 155,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Shepard and Metzler's (1971) mental rotation experiments showed that:",
    "opts": [
      "Reaction time decreases substantially when objects are rotated 180 degrees",
      "The time to judge whether two 3D objects are the same increases linearly with the angular difference between them",
      "Mental rotation happens instantaneously regardless of the angle of rotation",
      "Mental rotation is only possible for 2D objects, not 3D items"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Shepard and Metzler found a linear relationship between angular disparity and reaction time, suggesting that people mentally rotate objects at a constant rate, analogous to physical rotation."
  },
  {
    "id": 156,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Cooper and Shepard's experiments on letter rotation demonstrated that:",
    "opts": [
      "Mental rotation is instantaneous regardless of the angular disparity between the objects",
      "Recognition time increases with angular departure from upright, suggesting mental rotation to canonical orientation",
      "Mental rotation is performed by comparing abstract propositional descriptions of objects",
      "Mental rotation times are random and bear no systematic relationship to rotation angle"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Cooper and Shepard showed that recognition time for rotated letters/characters increased with angular departure from upright, consistent with mental rotation to a standard orientation."
  },
  {
    "id": 157,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Kosslyn's scanning experiments showed that:",
    "opts": [
      "Scanning across a larger mental image takes proportionally more time than a smaller one",
      "The time to scan between two points on a mental image increases with the distance between them",
      "All parts of a mental image can be accessed instantaneously without any scanning process",
      "People cannot scan across mental images because they lack the necessary spatial structure"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Kosslyn found that scanning time between locations on a mental image increased with distance, suggesting that mental images preserve spatial relationships (spatial equivalence)."
  },
  {
    "id": 158,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "'Spatial equivalence' of mental imagery means that:",
    "opts": [
      "Mental images are identical to photographs stored in visual memory areas",
      "Mental images preserve the spatial relationships of the objects they represent",
      "Mental images are stored as verbal descriptions without spatial structure",
      "Mental images have no spatial properties and are purely propositional"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Spatial equivalence: mental images represent spatial relationships in a way that is functionally analogous to the spatial layout of the actual objects or scenes."
  },
  {
    "id": 159,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "'Perceptual equivalence' of mental imagery refers to the finding that:",
    "opts": [
      "Mental imagery relies on completely different brain regions than visual perception does",
      "Imagery and perception share many of the same neural and cognitive processes",
      "There is no overlap between the neural systems supporting imagery and those for perception",
      "Imagery is purely symbolic and involves no activation of early visual cortical areas at all"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Perceptual equivalence: mental imagery activates many of the same brain regions and cognitive processes as actual perception, suggesting a shared representational system."
  },
  {
    "id": 160,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "The interacting images technique improves memory for word pairs by:",
    "opts": [
      "Storing the words as separate unrelated mental images",
      "Creating a vivid, interactive mental image linking the two words",
      "Repeating the word pair aloud multiple times",
      "Encoding the words based on their phonological similarity"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Interacting images: forming a vivid mental image in which the two items interact (e.g., a dog driving a car) creates a stronger associative link than separate images."
  },
  {
    "id": 161,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Tye's principle of 'implicit coding' in visual imagery means that:",
    "opts": [
      "All details of a mental image are explicitly represented and immediately available",
      "Some information in an image is only implicitly represented and must be discovered by inspection",
      "Images are stored purely as verbal codes with no spatial content",
      "Images have no implicit content and every aspect is directly encoded from the start"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Implicit coding: not all details of a mental image are explicitly represented; some must be derived by mentally inspecting the image, just as one might inspect a real picture."
  },
  {
    "id": 162,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Which mnemonic technique is most effective for remembering an ordered list of items?",
    "opts": [
      "Maintenance rehearsal and simple rote repetition",
      "Method of loci or peg word method",
      "Elaborative rehearsal without any spatial imagery",
      "Forming independent, non-interacting visual images for each item"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The method of loci and peg word method are particularly effective for ordered lists because they provide a built-in sequence (the route or the numbered pegs) that preserves order."
  },
  {
    "id": 163,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "The finding that concrete words are remembered better than abstract words supports:",
    "opts": [
      "The propositional representation hypothesis",
      "Dual coding hypothesis",
      "The single-code verbal theory",
      "The sensory-specific storage hypothesis"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Concrete words (e.g., 'apple') can be encoded both verbally and as a mental image (dual coding), giving two retrieval routes; abstract words (e.g., 'justice') are harder to image and rely mainly on verbal coding."
  },
  {
    "id": 164,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Mental rotation studies support the view that mental imagery is:",
    "opts": [
      "Propositional and symbolic, like a language of thought",
      "Analogue and spatially organised, like a picture",
      "Random and unstructured with no spatial properties",
      "Purely verbal and abstract with no visual component"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The linear relationship between rotation angle and RT in mental rotation studies supports an analogue (picture-like) representation that can be mentally rotated, not a purely propositional one."
  },
  {
    "id": 165,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Pylyshyn's critique of mental imagery research argued that imagery effects could be explained by:",
    "opts": [
      "Demand characteristics—participants behave as they think experimenters expect",
      "Tacit knowledge—participants know how physical rotation works and simulate it",
      "Practice effects—participants improve because they learn the experimental task",
      "Encoding specificity—the match between study and test conditions affects results"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Pylyshyn argued that mental rotation effects reflect tacit knowledge about how objects rotate physically, not a genuine analogue mental image—participants simulate expected results rather than truly rotating images."
  },
  {
    "id": 166,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Which property of natural language means that a finite set of rules can generate an infinite number of sentences?",
    "opts": [
      "Arbitrary",
      "Discrete",
      "Productive",
      "Structured"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Productivity (generativity): the grammar of a language allows speakers to produce and understand an unlimited number of novel sentences from a finite set of words and rules."
  },
  {
    "id": 167,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "The arbitrary property of language means that:",
    "opts": [
      "Words always follow highly predictable sound patterns based on their exact meaning content",
      "The relationship between a word's form and its meaning is not inherently motivated",
      "All languages around the world share exactly the same words for the same concepts always",
      "Grammar rules are completely universal across every language without any variation at all"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Arbitrariness: the connection between a linguistic sign (sound/word) and its meaning is conventional, not inherently motivated—'dog' has no dog-like sound."
  },
  {
    "id": 168,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Phonemes are best defined as:",
    "opts": [
      "The smallest units of sound that distinguish meaning in a language",
      "The smallest meaningful units of language structure (like prefixes)",
      "Rules for combining words into grammatically correct sentences",
      "The study of meaning in language at the word and sentence level"
    ],
    "ans": 0,
    "diff": "easy",
    "expl": "Phonemes are the smallest contrastive sound units in a language; changing one phoneme changes the meaning (e.g., /b/at vs /c/at)."
  },
  {
    "id": 169,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Morphemes are:",
    "opts": [
      "The smallest units of sound that distinguish meaning in a language",
      "The smallest units of meaning in a language such as prefixes and roots",
      "The rules governing how words are ordered to form grammatical sentences",
      "The study of meaning in language at the word and sentence level"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Morphemes are the smallest meaningful units of language (e.g., 'un-', 'help', '-ful' are three morphemes in 'unhelpful')."
  },
  {
    "id": 170,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Syntax refers to:",
    "opts": [
      "The rules governing the structure and order of words in sentences",
      "The meaning of individual words and how sentences convey ideas",
      "The study of language use in social contexts and conversations",
      "The sound system of a language and its phonological principles"
    ],
    "ans": 0,
    "diff": "easy",
    "expl": "Syntax is the set of rules that govern how words are combined into grammatical sentences (phrase structure, word order, etc.)."
  },
  {
    "id": 171,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Pragmatics is the study of:",
    "opts": [
      "The sound system and phonological rules of a language",
      "The grammatical structure and word ordering rules of sentences",
      "How context influences the interpretation and use of language",
      "The meaning of words and how sentences convey ideas"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Pragmatics examines how context, speaker intentions, and social conventions influence the meaning and use of language beyond the literal meaning of words."
  },
  {
    "id": 172,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Categorical perception of speech means that:",
    "opts": [
      "Understanding spoken language solely by analysing the physical properties of the sound wave",
      "Sounds along a continuum are perceived as belonging to discrete categories with sharp boundaries",
      "Extracting meaning from text while reading silently without any phonological involvement",
      "Recognizing written words by matching their visual shape against stored letter templates"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Categorical perception: listeners perceive speech sounds as belonging to discrete phoneme categories; sounds within a category sound alike, while sounds across a boundary sound very different."
  },
  {
    "id": 173,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Warren's phoneme restoration effect demonstrates that:",
    "opts": [
      "Listeners cannot perceive missing phonemes and report gaps in the signal",
      "Listeners perceptually restore a missing phoneme based on context, without noticing the gap",
      "Missing phonemes always cause complete comprehension failure in the listener",
      "Context has no measurable effect on speech perception or phoneme identification"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Warren (1970) replaced a phoneme with a cough; listeners reported hearing the complete word, demonstrating that top-down contextual knowledge restores missing speech sounds."
  },
  {
    "id": 174,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Garden path sentences (e.g., 'The horse raced past the barn fell') demonstrate that:",
    "opts": [
      "Syntax is always processed after semantics has already fully determined sentence meaning",
      "The parser initially commits to one syntactic interpretation and must reanalyse when it fails",
      "All possible sentence analyses are considered in parallel during comprehension processing",
      "Ambiguity in sentence structure is always resolved immediately by the surrounding context"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Garden path sentences show that the parser initially follows the most common syntactic path; when this fails, costly reanalysis is required, causing comprehension difficulty."
  },
  {
    "id": 175,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Garrett's distinction between form errors and meaning errors in speech production refers to:",
    "opts": [
      "Errors in pronunciation compared to errors made in the grammatical structure of sentences",
      "Errors involving sound/word form (e.g., spoonerisms) vs. errors involving meaning (e.g., semantic substitutions)",
      "Errors in reading aloud compared to errors made during spontaneous spoken speech production",
      "Errors in syntactic structure compared to errors made in the pragmatic use of language"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Garrett distinguished form-level errors (e.g., spoonerisms: 'blushing crow' for 'crushing blow') from meaning-level errors (e.g., semantic substitutions: 'table' for 'chair'), suggesting separate levels of language production."
  },
  {
    "id": 176,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "The word superiority effect refers to the finding that:",
    "opts": [
      "Words are always recognised faster than non-words regardless of any presentation context",
      "Letters are identified more accurately when presented within a word than in isolation or a non-word",
      "Longer words are recognised more quickly than shorter words due to their greater salience",
      "Familiar words are always recognised accurately regardless of any surrounding visual noise"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The word superiority effect: a letter embedded in a word (e.g., 'K' in 'WORK') is identified more accurately than the same letter in isolation or in a non-word, showing top-down facilitation."
  },
  {
    "id": 177,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Prescriptive grammar refers to:",
    "opts": [
      "Rules that prescribe how language should be used according to a standard",
      "Rules that describe how language is actually used by native speakers",
      "The study of how language evolves and changes across generations",
      "The phonological rules governing sound combinations in a language"
    ],
    "ans": 0,
    "diff": "easy",
    "expl": "Prescriptive grammar specifies how language 'should' be used according to a standard or authority; descriptive grammar describes how language is actually used by speakers."
  },
  {
    "id": 178,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Voicing in consonant production refers to:",
    "opts": [
      "The place where airflow is constricted in the vocal tract",
      "Whether the vocal cords vibrate during production",
      "The manner in which airflow is modified during articulation",
      "The loudness at which the consonant sound is produced"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Voicing: voiced consonants (e.g., /b/, /d/, /g/) involve vibration of the vocal cords; voiceless consonants (e.g., /p/, /t/, /k/) do not."
  },
  {
    "id": 179,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "The discrete property of language means that:",
    "opts": [
      "Sounds along a continuum are perceived as gradually varying with no clear boundaries",
      "Language is composed of distinct, separate units (phonemes, morphemes, words)",
      "All meanings of a word are activated before context selects one meaning",
      "Speech sounds can only be perceived when accompanied by visual lip movements"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Discreteness: language is built from distinct, categorical units (phonemes, morphemes, words) rather than continuous gradations, allowing precise combinations."
  },
  {
    "id": 180,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "Semantics is the study of:",
    "opts": [
      "The sound system of a language and its phonological rules",
      "The grammatical structure and word order in sentences",
      "Meaning in language",
      "How context and social factors influence language use"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Semantics is the branch of linguistics concerned with meaning—the meaning of words, phrases, and sentences."
  },
  {
    "id": 181,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "In problem solving, the 'initial state' refers to:",
    "opts": [
      "The desired end result or goal state of the problem",
      "The starting conditions of the problem",
      "The set of operators available for transforming states",
      "The constraints that limit permissible moves"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The initial state is the starting point of a problem—the conditions that exist before any solution steps are taken."
  },
  {
    "id": 182,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Operators in problem solving are:",
    "opts": [
      "The constraints that limit the range of possible solutions and define the problem boundaries",
      "The actions or moves that transform one state into another",
      "The solution path that represents the most commonly chosen sequence of operators in the space",
      "The total number of possible moves available times the number of mental states during the task"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Operators are the permissible actions or moves that can be applied to transform the current problem state toward the goal state."
  },
  {
    "id": 183,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Well-defined problems differ from ill-defined problems in that well-defined problems have:",
    "opts": [
      "The solver moves through the problem state by state until the goal is eventually reached",
      "Clearly specified initial state, goal state, and operators",
      "Problems are solved in a single intuitive flash of insight without any intermediate states",
      "All possible problem states are evaluated simultaneously in a single parallel computation"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Well-defined problems have clearly specified initial states, goal states, and operators (e.g., chess, algebra). Ill-defined problems lack one or more of these specifications (e.g., 'write a good essay')."
  },
  {
    "id": 184,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "The General Problem Solver (GPS), developed by Newell and Simon, uses which primary heuristic?",
    "opts": [
      "Hill climbing",
      "Means-ends analysis",
      "Working backward",
      "Generate-and-test"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "GPS uses means-ends analysis: it identifies the difference between the current state and the goal, then selects operators that reduce that difference."
  },
  {
    "id": 185,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Means-ends analysis involves:",
    "opts": [
      "The difference between the current problem state and the desired goal state drives operator choice",
      "Identifying the difference between current and goal states and applying operators to reduce that difference",
      "Operators are selected randomly without any strategic consideration of the current problem state",
      "The solver uses only backward reasoning from the goal state back to the initial starting state"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Means-ends analysis: compare the current state to the goal, identify the most important difference, and select the operator that best reduces that difference—repeat until the goal is reached."
  },
  {
    "id": 186,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Mental set in problem solving refers to:",
    "opts": [
      "The tendency to use a previously successful approach even when it is no longer optimal",
      "Searching the entire problem space systematically by exploring every possible path to the goal",
      "Using a shortcut strategy that reduces the search space but does not guarantee optimal solutions",
      "Relying entirely on random trial-and-error until the goal state is eventually reached by chance"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "Mental set (Einstellung): the tendency to persist with a previously successful problem-solving approach even when a simpler or more appropriate method is available."
  },
  {
    "id": 187,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Functional fixedness is the tendency to:",
    "opts": [
      "Use objects only in their conventional ways, preventing creative solutions",
      "Applying a previously successful solution strategy to a current problem that shares similar structure",
      "Arriving at a solution through sudden insight without any conscious connection to past experiences",
      "Generating completely original solutions without using any knowledge from previous problem situations"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "Functional fixedness: people perceive objects only in terms of their typical function, preventing them from using the object in a novel way needed to solve a problem (e.g., Duncker's candle problem)."
  },
  {
    "id": 188,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "The Gestalt approach to problem solving emphasises:",
    "opts": [
      "Forming and testing stimulus-response associations through reinforcement and repeated practice",
      "Insight and restructuring of the problem representation",
      "Applying a systematic algorithmic search that explores every possible solution path to the goal",
      "Using a means-ends analysis heuristic to reduce the distance between current state and the goal"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Gestalt psychologists (Köhler, Wertheimer) emphasised insight—a sudden restructuring of the problem representation that leads to the solution—rather than incremental trial-and-error."
  },
  {
    "id": 189,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Wallas's four stages of creativity are:",
    "opts": [
      "Trial, error, reinforcement, and habituation",
      "Preparation, incubation, illumination, verification",
      "Encoding, storage, retrieval, and consolidation",
      "Formulation, assessment, execution, and evaluation"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Wallas (1926) proposed four stages: preparation (gathering information), incubation (unconscious processing), illumination (the 'aha' moment), and verification (testing the solution)."
  },
  {
    "id": 190,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "The nine-dot problem is a classic example of a problem that requires:",
    "opts": [
      "Using only familiar functions of objects and failing to see novel alternative uses for them",
      "Breaking out of self-imposed constraints (going outside the perceived boundary)",
      "Being unable to perceive any objects in the environment that may be relevant to the situation",
      "Being distracted by irrelevant features of the problem that do not contribute to a solution"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The nine-dot problem requires connecting all nine dots with four straight lines without lifting the pen; most people impose an artificial boundary around the dots, which must be violated to solve it."
  },
  {
    "id": 191,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Expert problem solvers differ from novices primarily in that experts:",
    "opts": [
      "Have larger working memory capacity than novices",
      "Use more trial-and-error strategies than novices",
      "Represent problems in terms of deep structural features rather than surface features",
      "Solve problems faster because they use simpler strategies"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "Experts (e.g., chess masters, physics professors) categorise problems by their deep structural features (underlying principles), while novices focus on surface features (superficial appearance)."
  },
  {
    "id": 192,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "An algorithm in problem solving is:",
    "opts": [
      "Breaking the problem into smaller sub-problems and solving each sub-problem independently",
      "A guaranteed step-by-step procedure that will always find the solution",
      "Searching the entire problem space exhaustively until the optimal solution is found out",
      "Applying a fixed formula that guarantees the correct answer on every type of problem task"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "An algorithm is a systematic, exhaustive procedure that guarantees finding the correct solution if one exists, but may be slow (e.g., trying every possible combination)."
  },
  {
    "id": 193,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "A heuristic in problem solving is:",
    "opts": [
      "A sudden dramatic restructuring of the problem representation that reveals the correct solution",
      "A rule of thumb that is efficient but not guaranteed to find the solution",
      "A gradual incremental process of trial and error that slowly converges on the final answer path",
      "An algorithmic search procedure that systematically evaluates every possible operator combination"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Heuristics are mental shortcuts or rules of thumb that are efficient and often effective but do not guarantee finding the optimal or correct solution."
  },
  {
    "id": 194,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Mayer's 'arrangement problems' require the solver to:",
    "opts": [
      "Experience a sudden flash of insight that restructures the problem representation abruptly",
      "Rearrange given elements to satisfy a criterion (e.g., anagrams)",
      "Use a systematic stepwise approach to reach the solution incrementally over time",
      "Apply formal logical rules to derive an abstract answer from given premises"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Arrangement problems (e.g., anagrams, the nine-dot problem) require rearranging given elements into a configuration that satisfies the problem's criterion."
  },
  {
    "id": 195,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Verbal protocols (think-aloud protocols) are used in problem solving research to:",
    "opts": [
      "Measure reaction time differences between correct and incorrect trials",
      "Reveal the sequence of mental steps a solver takes",
      "Assess working memory capacity and its role in problem complexity",
      "Measure brain activity patterns associated with insight solutions"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Verbal protocols require participants to think aloud while solving a problem, providing a window into the sequence of cognitive steps and strategies used."
  },
  {
    "id": 196,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "Deductive reasoning involves:",
    "opts": [
      "Drawing a general conclusion or predicting future instances from observed specific cases",
      "Drawing conclusions that must be true if the premises are true",
      "Applying a general rule or principle to derive a specific guaranteed logical conclusion",
      "Testing a hypothesis by attempting to confirm it through repeated empirical observations"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Deductive reasoning: if the premises are true and the argument is valid, the conclusion must be true. It moves from general premises to specific conclusions."
  },
  {
    "id": 197,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "Inductive reasoning involves:",
    "opts": [
      "Drawing conclusions that must be absolutely true if the premises are true",
      "Drawing probable conclusions from specific observations or examples",
      "Drawing a visual representation of a logical argument using Euler circles",
      "Drawing on emotional intuition rather than formal rules to make a decision"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Inductive reasoning: drawing general conclusions from specific observations; conclusions are probable but not certain (e.g., 'all observed swans are white, therefore all swans are white')."
  },
  {
    "id": 198,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "In syllogistic reasoning, validity refers to:",
    "opts": [
      "Whether the premises are factually true in the real world",
      "Whether the conclusion follows logically from the premises, regardless of truth",
      "Whether the argument is persuasive enough to convince an audience",
      "Whether the conclusion matches the solver's prior beliefs"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Validity is a logical property: an argument is valid if the conclusion necessarily follows from the premises, regardless of whether the premises are actually true."
  },
  {
    "id": 199,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "Modus ponens is the valid conditional argument form:",
    "opts": [
      "If P then Q; not Q; therefore not P",
      "If P then Q; P; therefore Q",
      "If P then Q; Q; therefore P",
      "If P then Q; not P; therefore not Q"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Modus ponens (affirming the antecedent): If P then Q; P is true; therefore Q is true. This is a valid deductive argument form."
  },
  {
    "id": 200,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "Modus tollens is the valid conditional argument form:",
    "opts": [
      "If P then Q; P; therefore Q",
      "If P then Q; Q; therefore P",
      "If P then Q; not Q; therefore not P",
      "If P then Q; not P; therefore not Q"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "Modus tollens (denying the consequent): If P then Q; Q is false; therefore P is false. This is a valid deductive argument form."
  },
  {
    "id": 201,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "'Affirming the consequent' is a logical fallacy because:",
    "opts": [
      "The premise uses a universal quantifier which mistakenly makes the conditional reversible",
      "The conclusion does not necessarily follow (Q could be true for reasons other than P)",
      "Denying the antecedent is the only formally valid way to derive such conclusions",
      "It requires converting the if-then statement into a biconditional without justification"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Affirming the consequent (If P then Q; Q; therefore P) is invalid: Q could be true for reasons other than P, so P does not necessarily follow."
  },
  {
    "id": 202,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "The belief bias effect in syllogistic reasoning refers to:",
    "opts": [
      "People tend to accept conclusions that align with what they already believe to be factually true",
      "Accepting conclusions that are believable even when the argument is invalid",
      "People always evaluate the logical validity of conclusions independently of their own beliefs",
      "People reject conclusions that are logically valid if they are presented in unfamiliar formats"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Belief bias: people tend to accept conclusions that match their prior beliefs (believable conclusions) even when the argument is logically invalid, and reject valid arguments with unbelievable conclusions."
  },
  {
    "id": 203,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "The Wason selection task tests:",
    "opts": [
      "Inductive reasoning—whether people can extract general rules from specific cards",
      "Conditional reasoning—whether people correctly test a conditional rule",
      "Syllogistic reasoning—whether people can combine multiple premises to form a valid conclusion",
      "Probabilistic reasoning—whether people can accurately estimate the likelihood of drawn card values"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The Wason selection task presents a conditional rule (If P then Q) and four cards; participants must select the cards needed to test the rule. Most people fail to select the correct cards (P and not-Q)."
  },
  {
    "id": 204,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "The availability heuristic leads people to judge the probability of an event based on:",
    "opts": [
      "How frequently the event has occurred in the person's actual past experience",
      "How easily examples come to mind",
      "The statistical base rate information provided in the problem",
      "A careful analysis of all relevant probability data available"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Availability heuristic: people estimate the probability of an event by how easily examples come to mind; vivid or recent events are judged as more probable than they actually are."
  },
  {
    "id": 205,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "The representativeness heuristic involves judging probability based on:",
    "opts": [
      "How easily specific examples or instances can be retrieved from memory",
      "How similar something is to a typical member of a category",
      "The statistical base rate or actual numerical probability of its occurrence",
      "The emotional or affective value associated with the projected outcome"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Representativeness heuristic: people judge the probability that something belongs to a category by how similar it is to the typical member of that category, often ignoring base rates."
  },
  {
    "id": 206,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "The anchoring heuristic refers to:",
    "opts": [
      "Judging likelihood by evaluating how representative an event is of a category",
      "Judging probabilities based on how easily recent events come to mind",
      "Making estimates by starting from an initial value and adjusting insufficiently",
      "Evaluating decisions primarily based on whether outcomes are framed as gains or losses"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Anchoring: people start with an initial value (anchor) and adjust from it, but typically adjust insufficiently, leading to biased estimates."
  },
  {
    "id": 207,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "Simon's concept of 'bounded rationality' means that:",
    "opts": [
      "Humans generally make perfectly rational choices when given enough time and resources",
      "Human rationality is limited by cognitive capacity, time, and information, leading to satisficing rather than optimising",
      "Decision making is completely irrational and driven entirely by unconscious emotional impulses",
      "Rationality requires strict adherence to mathematical models of expected utility in all contexts"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Bounded rationality (Simon): human decision-making is rational within limits—cognitive capacity, time, and available information constrain us to 'satisfice' (find a good enough solution) rather than optimise."
  },
  {
    "id": 208,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "Kahneman's System 1 thinking is characterised as:",
    "opts": [
      "Slow, deliberate, and analytical",
      "Fast, automatic, and intuitive",
      "Conscious, effortful, and sequential",
      "Reflective, controlled, and rule-based"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "System 1 (Kahneman): fast, automatic, intuitive, and largely unconscious processing—it operates effortlessly but is prone to biases and heuristics."
  },
  {
    "id": 209,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "The typicality effect in inductive reasoning means that:",
    "opts": [
      "Typical category members make stronger inductive arguments than atypical members",
      "Typical members of a category are verified faster than atypical members in sentence verification tasks",
      "Arguments are stronger when they rely on a diverse set of typical premises rather than only one",
      "People ignore typicality entirely when judging the formal logical validity of deductive syllogisms"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "Typicality effect in induction: arguments based on typical members (e.g., 'robins have property X, therefore all birds have X') are judged stronger than those based on atypical members (e.g., penguins)."
  },
  {
    "id": 210,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "The diversity effect in inductive reasoning states that:",
    "opts": [
      "Diverse premises with dissimilar cases make weaker inductive arguments than similar ones do",
      "Diverse premises (e.g., robins and penguins) make stronger inductive arguments than similar premises (e.g., robins and sparrows)",
      "Diversity of premises has absolutely no measurable effect on the strength of inductive reasoning",
      "Only one clearly stated premise is ever needed to construct a strong inductive argument"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Diversity effect: an inductive argument is stronger when the premises come from diverse members of a category, because diversity suggests the property is broadly distributed across the category."
  },
  {
    "id": 211,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Expected utility theory is a normative model of decision making that prescribes:",
    "opts": [
      "A systematic evaluation of emotional tradeoffs to maximize subjective happiness in decision outcomes",
      "How rational agents should make decisions to maximise expected utility",
      "A descriptive account of the errors and biases that characterize actual real-world decision making",
      "A set of simple heuristics used to make fast decisions under conditions of limited information"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Expected utility theory is a normative (prescriptive) model specifying that rational agents should choose the option with the highest expected utility (probability × value)."
  },
  {
    "id": 212,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "A descriptive model of decision making aims to:",
    "opts": [
      "Prescribe exactly how decisions should be made to maximize expected utility for the decision maker",
      "Describe how people actually make decisions, including biases and heuristics",
      "Eliminate all cognitive biases from the decision-making process through careful training programs",
      "Maximize the total expected utility of outcomes using perfect probability estimation accuracy"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Descriptive models (e.g., prospect theory) describe actual human decision-making behaviour, including systematic deviations from rationality."
  },
  {
    "id": 213,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Tversky and Kahneman's (1981) Asian disease problem demonstrated:",
    "opts": [
      "Selecting the option that provides the maximum expected overall utility across all possible outcomes",
      "Framing effects—the same objective outcomes are evaluated differently depending on whether they are framed as gains or losses",
      "Selecting the option that is most emotionally appealing at the moment the decision is being made",
      "Selecting the first option that meets a minimum acceptable threshold of satisfactory performance"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The Asian disease problem showed that when outcomes were framed as lives saved (gain frame), people preferred the certain option; when framed as deaths (loss frame), they preferred the risky option—same outcomes, different choices."
  },
  {
    "id": 214,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Prospect theory (Kahneman & Tversky, 1979) differs from expected utility theory in that it proposes:",
    "opts": [
      "People consistently evaluate all options and reliably select the one with the highest expected value",
      "Outcomes are evaluated relative to a reference point, with losses weighted more heavily than equivalent gains",
      "People are always perfectly calibrated in judging the probabilities of all uncertain future events",
      "People never use mental shortcuts and instead perform full statistical analyses of every choice made"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Prospect theory: outcomes are evaluated relative to a reference point; the value function is concave for gains and convex for losses, and losses loom larger than equivalent gains (loss aversion)."
  },
  {
    "id": 215,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Loss aversion in prospect theory means that:",
    "opts": [
      "People code outcomes as gains or losses relative to a psychological reference point rather than total wealth",
      "The psychological impact of a loss is greater than the impact of an equivalent gain",
      "People always evaluate outcomes in terms of their absolute final wealth position after the transaction",
      "People treat gains and losses with exactly equal psychological weight and sensitivity at all amounts"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Loss aversion: losing $100 feels worse than gaining $100 feels good; the pain of losses is approximately twice as powerful as the pleasure of equivalent gains."
  },
  {
    "id": 216,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Preference reversal in decision making refers to:",
    "opts": [
      "A sure gain of moderate value is strongly preferred over a risky gamble with a higher expected payoff",
      "Changing one's preference between two options depending on how the choice is presented or elicited",
      "People are consistently risk-seeking in all types of decision situations regardless of the domain",
      "People show no preference between risky and certain options when the expected values are matched"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Preference reversal: people's stated preferences between two options can reverse depending on whether they are asked to choose between them or to price them separately—violating rational consistency."
  },
  {
    "id": 217,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "The sunk cost effect (Arkes & Blumer, 1985) refers to the tendency to:",
    "opts": [
      "Ignore past investments when making future decisions about resource use",
      "Continue investing in a failing course of action because of past unrecoverable investments",
      "Always choose the option with the highest expected value in a situation",
      "Prefer certain outcomes to uncertain ones regardless of expected value"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Sunk cost effect: people irrationally continue investing in a project because of past costs that cannot be recovered, even when future prospects are poor."
  },
  {
    "id": 218,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Psychological accounting (mental accounting) refers to:",
    "opts": [
      "Estimating the probability of an event based on how easily specific examples come to mind quickly",
      "The tendency to categorise and evaluate financial outcomes in separate mental accounts rather than as a whole",
      "Systematically calculating exact probabilities using formal statistical methods and base rate data",
      "Comparing the current decision situation against a comprehensive database of previous case outcomes"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Mental accounting: people categorise money into separate mental accounts (e.g., 'entertainment budget', 'savings') and treat money differently depending on its source or intended use, violating fungibility."
  },
  {
    "id": 219,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "The framing effect demonstrates that decision making violates which principle of rational choice?",
    "opts": [
      "Staying with a default option rather than actively switching to a potentially better alternative",
      "Invariance—rational choices should not depend on how options are described",
      "Actively seeking out new options that offer a higher expected utility than the current selection",
      "Systematically comparing all available options before committing to a final decision choice"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Invariance: rational choice theory requires that preferences between options should not change based on how they are described (framed). Framing effects violate this principle."
  },
  {
    "id": 220,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Overconfidence in decision making refers to:",
    "opts": [
      "Systematically underestimating one's own abilities and knowledge across many different task domains",
      "Systematically overestimating the accuracy of one's knowledge or predictions",
      "Always making perfectly correct decisions that are fully calibrated to the actual state of the world",
      "Avoiding all risky options entirely in favour of guaranteed certain outcomes regardless of payoff"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Overconfidence bias: people tend to overestimate the accuracy of their knowledge and predictions (e.g., being 90% confident in answers that are correct only 70% of the time)."
  },
  {
    "id": 221,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "The threshold approach to choice suggests that:",
    "opts": [
      "Options are evaluated sequentially on their single most important attribute",
      "People choose the first option that exceeds a minimum acceptable threshold (satisficing)",
      "Decision makers construct multiple scenarios and evaluate each mathematically",
      "Options are rejected if they fail on any one important minimum criteria simultaneously"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The threshold (satisficing) approach: rather than optimising, people set a minimum acceptable threshold and choose the first option that meets it—consistent with Simon's bounded rationality."
  },
  {
    "id": 222,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Cultural differences in decision making suggest that:",
    "opts": [
      "All cultures around the world make decisions in exactly the same way without any variation",
      "Individualistic cultures tend to focus on personal outcomes while collectivist cultures consider group outcomes",
      "Culture has absolutely no measurable effect on decision-making processes or outcome evaluation",
      "Western cultures are always more rational in their decision making than all other cultures"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Research shows cultural differences in decision making: individualistic cultures (e.g., Western) tend to focus on personal gain, while collectivist cultures (e.g., East Asian) weigh group outcomes and social harmony more heavily."
  },
  {
    "id": 223,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "In prospect theory, the value function is:",
    "opts": [
      "A linear relationship where objective value maps perfectly onto psychological value",
      "Concave for gains (diminishing sensitivity) and convex for losses, with a steeper slope for losses",
      "Convex for gains and concave for losses, with both slopes carrying exactly equal weight",
      "An S-shaped curve that is perfectly symmetrical around the absolute zero point of wealth"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Prospect theory's value function: concave for gains (each additional gain adds less value) and convex for losses (each additional loss hurts less), with losses weighted more steeply than gains—capturing loss aversion and diminishing sensitivity."
  },
  {
    "id": 224,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Kahneman's System 2 thinking is characterised as:",
    "opts": [
      "Fast, automatic, effortless, and predominantly unconscious in processing",
      "Slow, deliberate, effortful, and rule-based",
      "Guided primarily by emotional impulses and affective physiological reactions",
      "Heuristic-based, prone to systematic biases, and computationally inexpensive"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "System 2 (Kahneman): slow, deliberate, effortful, and conscious reasoning—it can override System 1 intuitions but requires significant cognitive resources."
  },
  {
    "id": 225,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "The Arkes and Blumer (1985) sunk cost experiment showed that people who paid more for a ski trip:",
    "opts": [
      "Were more likely to abandon the trip altogether when a better option became available to them",
      "Were more likely to use the ski trip even when a better option was available, to avoid 'wasting' the investment",
      "Made the exact same decision about whether to go on the trip regardless of the purchase cost",
      "Preferred the option with the lowest overall cost rather than considering the sunk investment"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Arkes and Blumer found that participants who paid more for a ski trip were more likely to use it (even when a better free trip was available) to justify the sunk cost—demonstrating the sunk cost effect."
  },
  {
    "id": 226,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Bottom-up (data-driven) processing in perception starts with:",
    "opts": [
      "Recognizing objects by comparing full images against stored templates in memory",
      "Raw sensory features that are combined to form a percept",
      "Recognizing objects based on the emotional associations attached to their form",
      "Recognizing objects by extracting only the colour and texture of the stimulus"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Bottom-up processing is driven by the stimulus itself: basic features (edges, colours, orientations) are detected and combined to build up a percept without relying on prior knowledge."
  },
  {
    "id": 227,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Top-down (theory-driven) processing in perception is driven by:",
    "opts": [
      "Raw sensory data from the environment and receptors",
      "Expectations, prior knowledge, and context",
      "Basic features such as edges, colour, and orientation",
      "The physical properties of the light entering the eye"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Top-down processing uses prior knowledge, expectations, and context to influence perception—the perceiver's mental state shapes what is perceived."
  },
  {
    "id": 228,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Biederman's recognition-by-components theory proposes that objects are recognised from:",
    "opts": [
      "Exact template matches stored in long-term memory",
      "36 basic volumetric shapes called geons",
      "Feature lists compared against stored category definitions",
      "Holistic impressions processed as unified wholes"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Biederman proposed that objects are represented as arrangements of ~36 basic geometric shapes (geons), analogous to how phonemes combine to form words."
  },
  {
    "id": 229,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Selfridge's pandemonium model uses 'demons' to represent:",
    "opts": [
      "Cells sensitive to progressively more complex features at each processing level",
      "Parallel feature detectors that 'shout' when their preferred feature is present",
      "Cells that respond only to complete holistic objects and ignore feature details",
      "Cells that encode spatial location information but not feature identity at all"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "In pandemonium, feature demons detect specific features and 'shout' in proportion to how well the input matches their feature; cognitive demons combine feature outputs to identify letters/objects."
  },
  {
    "id": 230,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "David Marr's three-stage model of visual perception begins with the:",
    "opts": [
      "3D model representation",
      "2.5D sketch",
      "Primal sketch",
      "Object-centred description"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "Marr's first stage is the primal sketch: a 2D representation of intensity changes, edges, and local geometric structures derived from the retinal image."
  },
  {
    "id": 231,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "In Marr's model, the 2.5D sketch adds information about:",
    "opts": [
      "The identity and category membership of the perceived object",
      "Surface orientation, depth, and relative distances from the viewer",
      "The global shape and structural description of the object",
      "The basic edges, contours, and intensity changes in the image"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "The 2.5D sketch incorporates depth, surface orientation, and relative distances—a viewer-centred representation that goes beyond the flat primal sketch but is not yet object-centred."
  },
  {
    "id": 232,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Gibson's theory of direct perception argues that:",
    "opts": [
      "Perception always requires extensive higher-order cognitive processing stages",
      "The environment provides sufficient information for perception without the need for internal construction",
      "Top-down processing from stored knowledge is essential for every perception",
      "Templates stored in long-term memory are required for all object recognition"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Gibson's direct perception: the rich information in the optic array (texture gradients, optic flow) is sufficient for perception; no internal construction or inference is needed."
  },
  {
    "id": 233,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Optic flow, as described by Gibson, refers to:",
    "opts": [
      "The pattern of apparent motion of objects in the visual field as the observer moves",
      "The flow of information through the visual processing hierarchy in brain",
      "The spread of activation across different areas in the visual cortex",
      "The flow of light through the lens and how it reaches the retinal surface"
    ],
    "ans": 0,
    "diff": "medium",
    "expl": "Optic flow is the pattern of apparent motion of objects, surfaces, and edges in a visual scene caused by the relative motion between the observer and the scene—a key source of information for navigation and depth."
  },
  {
    "id": 234,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "Change blindness demonstrates that:",
    "opts": [
      "People usually detect every change in a visual scene immediately",
      "People often fail to notice changes in a scene when the change occurs during a visual disruption",
      "Visual perception captures all details of a scene in a single glance",
      "Attention is not required for detecting changes in the visual field"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Change blindness: people frequently fail to detect changes in a visual scene (e.g., a person changing between cuts in a film) when the change coincides with a visual disruption, showing that perception is selective."
  },
  {
    "id": 235,
    "week": 2,
    "topic": "Perception",
    "topicIcon": "👁️",
    "q": "The context effect in perception refers to:",
    "opts": [
      "The effect of retinal image size on perceived object distance and depth",
      "The influence of surrounding objects or prior context on the perception of a target",
      "The effect of selective attention on feature detection speed and accuracy",
      "The role of long-term memory in pattern recognition and identification"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Context effect: the perceived properties of an object are influenced by the surrounding context (e.g., the same circle appears larger when surrounded by small circles than when surrounded by large circles)."
  },
  {
    "id": 236,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "George Berkeley contested Locke's view by arguing that:",
    "opts": [
      "All knowledge comes directly from sensory experience alone",
      "Abstract ideas like truth cannot be conceptualised as mental images",
      "The mind is a blank slate shaped entirely by experience",
      "Mental imagery is the only foundation for all forms of knowledge"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Berkeley argued that abstract ideas (e.g., truth, justice) cannot be represented as mental images, challenging Locke's claim that all mental content consists of associated mental images."
  },
  {
    "id": 237,
    "week": 1,
    "topic": "History",
    "topicIcon": "📜",
    "q": "Descartes' contribution to cognitive psychology includes the concept of:",
    "opts": [
      "A network of interconnected nodes each representing a concept and linked by associations",
      "Mind-body dualism—the mind and body are separate substances",
      "A static list of memorized facts that is searched sequentially from beginning to end",
      "A single central processor that handles all cognitive tasks using a unified algorithm"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Descartes proposed mind-body dualism: the mind (res cogitans) and body (res extensa) are distinct substances, raising questions about how they interact—a foundational issue for cognitive psychology."
  },
  {
    "id": 238,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "The judgment method in cognitive psychology research uses:",
    "opts": [
      "Precise measurements of how quickly participants respond to stimuli",
      "Rating scales on which participants evaluate their cognitive experience",
      "Counts of correct and incorrect responses across experimental trials",
      "Verbal reports describing the sequence of mental steps during a task"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The judgment method uses rating scales (e.g., 7-point Likert scales) to capture participants' subjective evaluations of their cognitive processes or experiences."
  },
  {
    "id": 239,
    "week": 1,
    "topic": "Methods",
    "topicIcon": "🔬",
    "q": "A key advantage of using multiple methods in cognitive psychology research is:",
    "opts": [
      "It guarantees that all findings will be replicated across every study",
      "The limitations of one method can be offset by the strengths of another, providing a more complete picture",
      "It eliminates the need for statistical analysis of the results entirely",
      "It allows researchers to study only observable behaviour without inference"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "Converging operations: using multiple methods with different limitations means that findings consistent across methods are more reliable, and each method's weaknesses are compensated by others' strengths."
  },
  {
    "id": 240,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "The modal model of memory is also known as the:",
    "opts": [
      "Baddeley and Hitch model",
      "Atkinson-Shiffrin model",
      "Craik and Lockhart model",
      "Tulving's model"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The Atkinson-Shiffrin (1968) model is called the modal model because it was the dominant (modal) model of memory for many years, proposing sensory register, STM, and LTM."
  },
  {
    "id": 241,
    "week": 5,
    "topic": "Long-Term Memory",
    "topicIcon": "📚",
    "q": "Retroactive interference in LTM occurs when:",
    "opts": [
      "Old learning interferes with recall of new information",
      "New learning interferes with recall of previously learned information",
      "Information simply fades from memory due to the passage of time",
      "Emotional memories are more resistant to forgetting than neutral ones"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Retroactive interference: newly learned material interferes with the recall of previously learned material (new interferes backward with old)."
  },
  {
    "id": 242,
    "week": 4,
    "topic": "Working Memory",
    "topicIcon": "💭",
    "q": "The irrelevant speech effect shows that:",
    "opts": [
      "Background music disrupts reasoning but not serial recall of visual items",
      "Irrelevant background speech disrupts serial recall of visually presented items, even when ignored",
      "Articulatory suppression eliminates the word-length effect entirely",
      "Concurrent spatial tapping impairs phonological but not visual processing"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "The irrelevant speech effect: unattended background speech disrupts serial recall of visually presented items by interfering with the phonological loop, even though the speech is not consciously attended to."
  },
  {
    "id": 243,
    "week": 11,
    "topic": "Reasoning",
    "topicIcon": "⚖️",
    "q": "The atmospheric effect in syllogistic reasoning refers to:",
    "opts": [
      "The conclusion must always follow from the premises with absolute certainty and no exceptions",
      "The tendency to accept conclusions that match the mood (universal/particular, affirmative/negative) of the premises",
      "The reasoner creates multiple models of the world compatible with the premises and evaluates them",
      "All forms of reasoning rely on pattern recognition rather than any systematic logical analysis"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Atmospheric effect: the quantifiers and negations in the premises create an 'atmosphere' that biases people toward accepting conclusions with matching quantifiers, regardless of logical validity."
  },
  {
    "id": 244,
    "week": 12,
    "topic": "Decision Making",
    "topicIcon": "🎲",
    "q": "Kahneman and Tversky's prospect theory was awarded the Nobel Prize in Economics in:",
    "opts": [
      "1979",
      "1996",
      "2002",
      "2011"
    ],
    "ans": 2,
    "diff": "medium",
    "expl": "Daniel Kahneman received the Nobel Prize in Economics in 2002 for his work with Amos Tversky on prospect theory and cognitive biases in decision making (Tversky had died in 1996)."
  },
  {
    "id": 245,
    "week": 10,
    "topic": "Problem Solving",
    "topicIcon": "🧩",
    "q": "Insight problems differ from non-insight problems in that insight problems:",
    "opts": [
      "Can be solved through incremental, step-by-step progress",
      "Require a sudden restructuring of the problem representation for solution",
      "Rely entirely on retrieving a memorized solution from long-term memory",
      "Can only be solved through systematic trial-and-error approaches"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Insight problems require a sudden 'aha' moment—a restructuring of how the problem is represented—rather than gradual, incremental progress toward the solution."
  },
  {
    "id": 246,
    "week": 7,
    "topic": "Concepts",
    "topicIcon": "🗂️",
    "q": "The 'family resemblance' structure of natural categories, proposed by Wittgenstein, means that:",
    "opts": [
      "All members of a category share identical sets of features with absolutely no variation",
      "Members share overlapping sets of features, with no single feature common to all",
      "Categories have sharp and clearly defined boundaries with no ambiguous borderline cases",
      "Category membership is determined by a fixed checklist of necessary and sufficient features"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Family resemblance: natural category members share overlapping features (like members of a family), but no single feature is shared by all members—undermining the classical view's requirement for necessary features."
  },
  {
    "id": 247,
    "week": 8,
    "topic": "Visual Memory",
    "topicIcon": "🖼️",
    "q": "Kosslyn's image overflow experiments showed that:",
    "opts": [
      "Scanning time between two points on a mental image decreases proportionally with distance",
      "When imagining an object very close, details 'overflow' the mental image, suggesting images have a limited spatial extent",
      "Mental images are limitless in size and can encompass the entire 360-degree visual field",
      "Visual imagery has no spatial properties and cannot overflow any boundaries whatsoever"
    ],
    "ans": 1,
    "diff": "hard",
    "expl": "Kosslyn found that when participants imagined an object very close, they reported that parts of it 'overflowed' the mental image, suggesting that mental images have a limited spatial extent analogous to a visual field."
  },
  {
    "id": 248,
    "week": 9,
    "topic": "Language",
    "topicIcon": "💬",
    "q": "The place of articulation for consonants refers to:",
    "opts": [
      "Whether the vocal cords vibrate during the production of the consonant sound being made",
      "Where in the vocal tract the airflow is constricted (e.g., lips, teeth, palate)",
      "The manner in which the airflow through the vocal tract is modified during articulation",
      "The loudness or volume at which the consonant sound is produced by the speaker's voice"
    ],
    "ans": 1,
    "diff": "medium",
    "expl": "Place of articulation: the location in the vocal tract where the primary constriction occurs (e.g., bilabial /p/, /b/; alveolar /t/, /d/; velar /k/, /g/)."
  },
  {
    "id": 249,
    "week": 3,
    "topic": "Attention",
    "topicIcon": "🎯",
    "q": "The Stroop effect is a classic demonstration of:",
    "opts": [
      "Selective attention succeeding perfectly at filtering all irrelevant information",
      "Automatic processing (reading) interfering with controlled processing (colour naming)",
      "Divided attention failing because the two tasks exceed available resource capacity",
      "Inattentional blindness caused by focusing on an unexpected irrelevant visual event"
    ],
    "ans": 1,
    "diff": "easy",
    "expl": "The Stroop effect: naming the ink colour of colour words (e.g., the word RED written in blue ink) is slower and more error-prone because automatic word reading interferes with the controlled colour-naming task."
  },
  {
    "id": 250,
    "week": 4,
    "topic": "Memory",
    "topicIcon": "🧠",
    "q": "Haptic memory is the sensory store for which modality?",
    "opts": [
      "Visual",
      "Auditory",
      "Touch",
      "Olfactory"
    ],
    "ans": 2,
    "diff": "easy",
    "expl": "Haptic memory is the sensory store for touch information, holding tactile sensations briefly after contact with an object."
  }
];
