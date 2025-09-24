 import React, { useState } from 'react';
import { Monitor, Database, Cloud, Zap, Users, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
  const [expandedSection, setExpandedSection] = useState('discovery');

  const services = [
    {
      icon: <Database className="w-12 h-12 text-cyan-400" />,
      title: "Salesforce Integration",
      description: "Seamlessly integrate different complex systems with Salesforce with our affordable Salesforce integration services. We are trusted for connecting Salesforce with different"
    },
    {
      icon: <Monitor className="w-12 h-12 text-cyan-400" />,
      title: "Salesforce AppExchange Application Development",
      description: "We can help you at every stage of your app development from discovery, design, and implementation to the app listing and"
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-400" />,
      title: "Salesforce Customization & Development",
      description: "We use our knowledge and expertise in building Salesforce applications that address and resolve the needs of businesses, regardless of the"
    }
  ];

  const exclusiveServices = [
    {
      icon: <Monitor className="w-12 h-12 text-cyan-400" />,
      title: "Salesforce Implementation",
      description: "Maximize your ROI with our end to end Salesforce implementation services"
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Lightning Experience & Lightning Components Development (LWC)",
      description: "Lightning is Salesforce's reimagined UI"
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-400" />,
      title: "Cloud Solution & Offshore Development",
      description: "We are your virtual dedicated team of Software Developers and can remotely"
    }
  ];

  const processSteps = [
    {
      id: 'discovery',
      title: 'DISCOVERY',
      content: 'CloudExped shall run a business process discovery workshop to understand and analyses your processes, goals, challenges and objectives and to check if these can be mapped to SFDC to achieve the stated objectives.'
    },
    {
      id: 'proof',
      title: 'PROOF OF CONCEPT',
      content: 'We create a proof of concept to validate the technical feasibility and demonstrate core functionalities.'
    },
    {
      id: 'plan',
      title: 'PLAN OF ACTION (POA)',
      content: 'Detailed project roadmap with timelines, milestones, and resource allocation for successful implementation.'
    },
    {
      id: 'management',
      title: 'PROJECT MANAGEMENT',
      content: 'Comprehensive project management ensuring timely delivery and quality standards throughout the development process.'
    },
    {
      id: 'handshake',
      title: 'HANDSHAKE',
      content: 'Final project handover with complete documentation and knowledge transfer to your team.'
    },
    {
      id: 'support',
      title: 'SUPPORT',
      content: 'Ongoing support and maintenance to ensure optimal performance and continuous improvement.'
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-cyan-400 font-semibold tracking-wider">WHAT WE DO</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-16">
            We provide exclusive services<br />
            for your business
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {exclusiveServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='14'%3ETeam Collaboration%3C/text%3E%3C/svg%3E"
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-24 bg-gray-600 rounded-lg shadow-lg">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='96' viewBox='0 0 128 96'%3E%3Crect width='128' height='96' fill='%234b5563'/%3E%3Ccircle cx='64' cy='48' r='16' fill='%23ffffff'/%3E%3C/svg%3E"
                    alt="Professional" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-cyan-400 font-semibold tracking-wider">DISCOVERY</span>
              <div className="mt-8 space-y-4">
                {processSteps.map((step) => (
                  <div key={step.id} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleSection(step.id)}
                      className="flex items-center justify-between w-full text-left py-2 font-semibold text-gray-700 hover:text-cyan-600 transition-colors"
                    >
                      <span>{step.title}</span>
                      {expandedSection === step.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {expandedSection === step.id && (
                      <div className="mt-2 text-gray-600 leading-relaxed">
                        {step.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-cyan-400 font-semibold tracking-wider">ABOUT US</span>
                <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-6">
                  Why Most People Choose Our Business Solutions
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700">DISCOVERY</span>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm">
                      CloudExped shall run a business process discovery workshop to understand and analyses your processes, goals, challenges and objectives and to check if these can be mapped to SFDC to achieve the stated objectives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='250' viewBox='0 0 350 250'%3E%3Crect width='350' height='250' fill='%23f3f4f6'/%3E%3Ctext x='175' y='125' text-anchor='middle' fill='%236b7280' font-size='14'%3EWorkspace Environment%3C/text%3E%3C/svg%3E"
                  alt="Workspace" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -top-4 -left-4 w-24 h-32 bg-gray-600 rounded-lg shadow-lg">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='128' viewBox='0 96 128'%3E%3Crect width='96' height='128' fill='%234b5563'/%3E%3Ccircle cx='48' cy='64' r='20' fill='%23ffffff'/%3E%3C/svg%3E"
                    alt="Team member" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with Salesforce?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our expertise can help you achieve your goals
          </p>
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;