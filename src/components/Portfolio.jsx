import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, ExternalLink, Brain, Code, MessageSquare, Star, Calendar, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: "Hi! I'm an AI assistant trained on this portfolio. Ask me anything about the candidate's experience!" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [sentimentText, setSentimentText] = useState('');
  const [sentimentResult, setSentimentResult] = useState(null);
  const [currentJoke, setCurrentJoke] = useState('');
  const [isLoadingJoke, setIsLoadingJoke] = useState(false);

  // Mock sentiment analysis
  const analyzeSentiment = (text) => {
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'love', 'fantastic', 'awesome', 'wonderful'];
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'horrible', 'disappointing', 'worst'];
    
    const words = text.toLowerCase().split(' ');
    let score = 0;
    
    words.forEach(word => {
      if (positiveWords.includes(word)) score += 1;
      if (negativeWords.includes(word)) score -= 1;
    });
    
    if (score > 0) return { sentiment: 'Positive', confidence: Math.min(0.8 + score * 0.1, 0.99), color: 'text-green-600' };
    if (score < 0) return { sentiment: 'Negative', confidence: Math.min(0.8 + Math.abs(score) * 0.1, 0.99), color: 'text-red-600' };
    return { sentiment: 'Neutral', confidence: 0.7, color: 'text-gray-600' };
  };

  const handleSentimentAnalysis = () => {
    if (sentimentText.trim()) {
      setSentimentResult(analyzeSentiment(sentimentText));
    }
  };

  const handleChatSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!chatInput.trim()) return;
    
    const newMessages = [...chatMessages, { type: 'user', text: chatInput }];
    
    // Mock AI responses
    const responses = [
      "This candidate has 5+ years of experience in AI/ML, specializing in NLP and generative models.",
      "They've worked on production systems handling millions of requests per day.",
      "Their expertise includes PyTorch, TensorFlow, Transformers, and cloud deployment on AWS/GCP.",
      "They have published 3 research papers and contributed to several open-source projects.",
      "Their background combines both research and industry experience, making them versatile for various roles."
    ];
    
    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages([...newMessages, { type: 'bot', text: randomResponse }]);
    }, 1000);
    
    setChatMessages(newMessages);
    setChatInput('');
  };

  const generateJoke = () => {
    setIsLoadingJoke(true);
    
    const aiJokes = [
      "Why don't AI models ever get tired? Because they always have plenty of training data to keep them energized!",
      "What did the neural network say to the overfitted model? 'You need to learn when to stop!'",
      "Why did the machine learning engineer break up with the linear regression? It wasn't a good fit!",
      "What's a data scientist's favorite type of music? Deep house... learning!",
      "Why don't GPT models make good comedians? They keep generating the same punchlines!",
      "What did the gradient say during backpropagation? 'I'm just trying to find my way back!'",
      "Why did the computer vision model go to therapy? It had too many filters!",
      "What's an AI's favorite snack? Chip learning!"
    ];
    
    setTimeout(() => {
      const randomJoke = aiJokes[Math.floor(Math.random() * aiJokes.length)];
      setCurrentJoke(randomJoke);
      setIsLoadingJoke(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Engineer
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Experience', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center">
              <Brain size={60} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Engineer & Researcher
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Specializing in NLP and Generative Models
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I build practical, impactful AI solutions — from prototypes to production.
            Transforming complex problems into intelligent, scalable systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
            <button className="border border-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all">
              Hire Me
            </button>
            <a href="#projects" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
              See My Work <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="mt-16">
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="block mx-auto hover:text-cyan-300 transition-colors"
            >
              <ChevronDown size={32} className="animate-bounce text-cyan-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            What Others Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "VP of Engineering",
                company: "TechCorp",
                image: "SC",
                testimonial: "Exceptional AI engineer who delivered a production system that handles 10M+ daily requests. Their deep understanding of both research and practical implementation is rare.",
                rating: 5
              },
              {
                name: "Dr. Michael Rodriguez",
                role: "Research Director",
                company: "AI Research Lab",
                image: "MR",
                testimonial: "Outstanding researcher and collaborator. Published high-impact papers while maintaining excellent code quality. A true bridge between academia and industry.",
                rating: 5
              },
              {
                name: "Lisa Wang",
                role: "Product Manager",
                company: "StartupX",
                image: "LW",
                testimonial: "Transformed our ML prototype into a scalable production system in record time. Great communicator who explains complex AI concepts clearly to non-technical stakeholders.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-6 bg-white/5 rounded-full px-8 py-4 border border-white/10">
              <div className="flex items-center gap-2">
                <Github size={20} className="text-cyan-400" />
                <span className="text-sm">
                  <span className="text-cyan-400 font-bold">250+</span> GitHub Stars
                </span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-400" />
                <span className="text-sm">
                  <span className="text-yellow-400 font-bold">15+</span> LinkedIn Recommendations
                </span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Code size={20} className="text-purple-400" />
                <span className="text-sm">
                  <span className="text-purple-400 font-bold">3</span> Published Papers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate AI Engineer with 5+ years of experience building and deploying machine learning systems at scale. 
                My expertise spans from research to production, with a focus on natural language processing and generative AI.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6">What Makes Me Different</h3>
              <p className="text-gray-300 leading-relaxed">
                I bridge the gap between cutting-edge research and practical implementation. With both academic publications 
                and production systems under my belt, I bring a unique perspective to AI challenges.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'LLM Fine-tuning',
                  'Computer Vision',
                  'Reinforcement Learning',
                  'Deep Learning',
                  'MLOps & Deployment',
                  'Research & Development',
                  'Data Engineering',
                  'Cloud Architecture'
                ].map(skill => (
                  <div key={skill} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-cyan-400" />
                      <span>{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Modal LLM Platform",
                description: "Built a production system processing 10M+ requests/day",
                impact: "40% improvement in accuracy over baseline",
                tech: ["PyTorch", "Transformers", "AWS"],
                type: "Production"
              },
              {
                title: "Neural Code Generator",
                description: "Research project on automated code generation",
                impact: "Published in top-tier conference",
                tech: ["GPT", "AST", "Python"],
                type: "Research"
              },
              {
                title: "AI Art Generator",
                description: "Creative project combining GANs with style transfer",
                impact: "10k+ users, featured in tech blogs",
                tech: ["StyleGAN", "React", "Firebase"],
                type: "Creative"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-400/20 text-cyan-400">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-cyan-400 mb-4">{project.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="mt-4 flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  <ExternalLink size={16} />
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Showcase */}
      <section id="showcase" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Interactive AI Demos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Assistant Chat */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="text-cyan-400" />
                Portfolio AI Assistant
              </h3>
              <div className="bg-black/30 rounded-lg p-4 h-48 overflow-y-auto mb-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-3 ${msg.type === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-2 rounded-lg max-w-[90%] text-sm ${
                      msg.type === 'user' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-gray-700 text-gray-100'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit(e)}
                  placeholder="Ask about experience..."
                  className="flex-1 bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm"
                />
                <button onClick={handleChatSubmit} className="bg-cyan-500 px-3 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-sm">
                  Send
                </button>
              </div>
            </div>

            {/* Sentiment Analyzer */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Brain className="text-purple-400" />
                Sentiment Analysis
              </h3>
              <div className="space-y-4">
                <textarea
                  value={sentimentText}
                  onChange={(e) => setSentimentText(e.target.value)}
                  placeholder="Type something to analyze..."
                  className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 h-20 resize-none text-sm"
                />
                <button
                  onClick={handleSentimentAnalysis}
                  className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors w-full text-sm"
                >
                  Analyze Sentiment
                </button>
                {sentimentResult && (
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className={`font-semibold ${sentimentResult.color}`}>
                      {sentimentResult.sentiment}
                    </div>
                    <div className="text-xs text-gray-400">
                      Confidence: {(sentimentResult.confidence * 100).toFixed(1)}%
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* AI Joke Generator */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="text-yellow-400" />
                AI Joke Generator
              </h3>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 h-32 flex items-center justify-center">
                  {isLoadingJoke ? (
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="animate-spin w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
                      Generating joke...
                    </div>
                  ) : currentJoke ? (
                    <p className="text-sm text-gray-100 text-center leading-relaxed">{currentJoke}</p>
                  ) : (
                    <p className="text-gray-400 text-sm text-center">Click below to generate an AI-themed joke!</p>
                  )}
                </div>
                <button
                  onClick={generateJoke}
                  disabled={isLoadingJoke}
                  className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors w-full text-sm disabled:opacity-50"
                >
                  {isLoadingJoke ? 'Generating...' : 'Tell me a joke!'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Timeline
          </h2>
          
          <div className="space-y-8">
            {[
              {
                year: "2023-Present",
                title: "Senior AI Engineer",
                company: "Tech Startup",
                description: "Leading AI initiatives, built scalable ML pipelines processing millions of requests daily."
              },
              {
                year: "2021-2023",
                title: "AI Research Scientist",
                company: "Research Lab",
                description: "Published 3 papers on generative models, developed novel architectures for NLP tasks."
              },
              {
                year: "2019-2021",
                title: "ML Engineer",
                company: "Fortune 500",
                description: "Deployed computer vision models to production, reduced inference time by 60%."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  {index < 2 && <div className="w-px h-16 bg-gray-600 mt-2"></div>}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-cyan-400 mb-1">{item.year}</div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <div className="text-purple-400 mb-2">{item.company}</div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring AI innovation to your team? Let's discuss how I can help solve your challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="border border-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2">
              <Calendar size={20} />
              Schedule Call
            </button>
          </div>
          
          <div className="flex justify-center gap-8">
            {[
              { icon: <Github size={24} />, label: "GitHub", href: "#" },
              { icon: <Linkedin size={24} />, label: "LinkedIn", href: "#" },
              { icon: <Mail size={24} />, label: "Email", href: "#" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 AI Engineer Portfolio. Built with React and passion for AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;