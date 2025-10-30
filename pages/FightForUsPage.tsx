import React from 'react';

const FormSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6 pt-8 mt-8 border-t border-gray-700 first:mt-0 first:pt-0 first:border-none">
    <h3 className="text-2xl font-bebas text-red-600 tracking-wider uppercase">{title}</h3>
    {children}
  </div>
);

const Label: React.FC<{ htmlFor: string; required?: boolean; children: React.ReactNode }> = ({ htmlFor, required, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-bold text-gray-300 mb-2 uppercase">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const HelpText: React.FC<{ children: React.ReactNode; isItalic?: boolean; isUppercase?: boolean; }> = ({ children, isItalic, isUppercase }) => (
  <p className={`text-xs text-gray-400 mt-1 ${isItalic ? 'italic' : ''} ${isUppercase ? 'uppercase' : ''}`}>{children}</p>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-red-500 focus:border-red-500" />
);

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
  <select {...props} className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-red-500 focus:border-red-500 appearance-none" />
);

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea {...props} className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-red-500 focus:border-red-500" />
);

const FightForUsPage: React.FC = () => {
  const weightClasses = [
    "ATOMWEIGHT (AT OR UNDER 105LBS)",
    "STRAWWEIGHT (105-115LBS)",
    "FLYWEIGHT (115-125LBS)",
    "BANTAMWEIGHT (125-135LBS)",
    "FEATHERWEIGHT (135-145LBS)",
    "LIGHTWEIGHT (145-155LBS)",
    "WELTERWEIGHT (155-170LBS)",
    "MIDDLEWEIGHT (170-185LBS)",
    "LIGHT-HEAVYWEIGHT (185-205LBS)",
    "CRUISERWEIGHT (205-230LBS)",
    "HEAVYWEIGHT (230-265LBS)",
    "SUPER-HEAVYWEIGHT (265LBS AND UP)",
  ];
  
  const backgrounds = ["BOXING", "MUAY THAI", "WRESTLING", "TRADITIONAL MARTIAL ARTS", "JIU JITSU"];
  
  const stances = ["ORTHODOX", "SOUTHPAW", "SWITCH"];
  
  const trainingYearsOptions = ["Select...", "< 1 year", "1-2 years", "3-5 years", "5-10 years", "10+ years"];
  
  const fightStyleOptions = ["Select...", "Striker", "Grappler", "Wrestler", "Brawler", "Well-Rounded", "Other"];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bebas tracking-wider text-white">FIGHT FOR US - CREATE FIGHTER PROFILE</h2>
        <p className="text-gray-400 mt-2 max-w-3xl mx-auto uppercase">
         The purpose of this form is to gather information from fighters who would like to compete on a Valley Fight Series show. Please complete all required fields honestly. Completing this form will submit you for matchmaking. Thank you!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-700 rounded-lg p-8">
        <form
          action="https://submit-form.com/YOUR_FORM_ID" // Replace with your Formspark ID
          method="POST"
          encType="multipart/form-data"
        >
          
          <FormSection title="PERSONAL INFO">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="first-name" required>Fighter Name</Label>
                <Input type="text" id="first-name" name="First Name" placeholder="First" required />
              </div>
              <div>
                <Label htmlFor="last-name" required>&nbsp;</Label>
                <Input type="text" id="last-name" name="Last Name" placeholder="Last" required />
              </div>
            </div>
             <div>
                <Label htmlFor="nickname">Ring Name /​ Nickname</Label>
                <Input type="text" id="nickname" name="Nickname" />
                <HelpText isUppercase>IF NONE, LEAVE BLANK</HelpText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <Label htmlFor="dob" required>Date of Birth</Label>
                  <Input type="date" id="dob" name="Date of Birth" required />
               </div>
               <div>
                  <Label htmlFor="gender" required>Gender</Label>
                  <Select id="gender" name="Gender" required>
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
               </div>
            </div>
             <div>
                <Label htmlFor="location" required>Where are you located?</Label>
                <Input type="text" id="location" name="Location" required />
                <HelpText isUppercase>CITY, STATE, AND ZIPCODE</HelpText>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <Label htmlFor="height" required>What is your height?</Label>
                  <Input type="text" id="height" name="Height" required />
                  <HelpText>EXAMPLE: 5'7" FOR 5 FOOT 7 INCHES TALL</HelpText>
               </div>
               <div>
                  <Label htmlFor="current-weight" required>What do you currently weigh?</Label>
                  <Input type="number" id="current-weight" name="Current Weight" required />
               </div>
            </div>
            <div>
              <Label htmlFor="weight-class" required>What is your weight class?</Label>
              <HelpText isItalic>PLEASE SELECT ALL OF THE WEIGHT CLASSES THAT APPLY TO YOU</HelpText>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-2">
                  {weightClasses.map(option => (
                      <label key={option} className="flex items-center space-x-3 text-gray-300">
                          <input type="checkbox" name="weight-class[]" value={option} className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500" />
                          <span className="text-sm uppercase">{option}</span>
                      </label>
                  ))}
                  <div className="flex items-center space-x-3">
                      <input type="checkbox" id="weight-class-other-checkbox" name="weight-class[]" value="Other" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500" />
                      <Input type="text" name="weight-class-other" placeholder="Other" className="flex-1"/>
                  </div>
              </div>
            </div>
             <div>
                <Label htmlFor="photo">Upload a photo of yourself from the waist up</Label>
                <Input type="file" id="photo" name="Fighter Photo" accept="image/*" className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"/>
                <HelpText isUppercase>PREFERRED, BUT NOT REQUIRED.</HelpText>
            </div>
          </FormSection>

          <FormSection title="CONTACT INFO">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" required>Fighter Email Address</Label>
                  <Input type="email" id="email" name="Email" required />
                </div>
                <div>
                  <Label htmlFor="phone" required>Fighter Phone Number</Label>
                  <Input type="tel" id="phone" name="Phone" required />
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="instagram">What is your Instagram?</Label>
                  <Input type="text" id="instagram" name="Instagram" />
                   <HelpText isUppercase>IF NONE, LEAVE BLANK</HelpText>
                </div>
                <div>
                  <Label htmlFor="facebook">What is your Facebook?</Label>
                  <Input type="text" id="facebook" name="Facebook" />
                  <HelpText isUppercase>IF NONE, LEAVE BLANK</HelpText>
                </div>
             </div>
             <div>
                <Label htmlFor="contact-method" required>Preferred Contact Method</Label>
                <Select id="contact-method" name="Preferred Contact Method" required>
                    <option>Email</option>
                    <option>Phone Call</option>
                    <option>Text Message</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>Other</option>
                </Select>
                <HelpText isItalic>HOW SHOULD WE CONTACT YOU</HelpText>
             </div>
          </FormSection>

          <div className="pt-8 mt-8 border-t border-gray-700">
            <h2 className="text-2xl font-bebas text-red-600 tracking-wider uppercase">Event & Match Type</h2>
            <div className="space-y-6 mt-6">
                 <div>
                  <Label htmlFor="bout-type" required>Choose Bout Type</Label>
                  <Select id="bout-type" name="Bout Type" required>
                      <option>MMA</option>
                      <option>Muay Thai</option>
                      <option>Boxing</option>
                      <option>Grappling</option>
                      <option>Team Grappling</option>
                      <option>All of the above</option>
                  </Select>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-700">
                    <h3 className="text-xl font-bebas text-white tracking-wider uppercase">Background & Experience</h3>
                    <div className="space-y-6 mt-6">
                        <div>
                            <Label htmlFor="gym" required>What gym/​team do you represent?</Label>
                            <Input type="text" id="gym" name="Gym/Team" placeholder='IF NONE, LIST "INDEPENDENT"' required />
                            <HelpText isUppercase>IF NONE, LIST "INDEPENDENT"</HelpText>
                        </div>
                        <div>
                            <Label htmlFor="matchup-contact">Who should we contact regarding matchups?</Label>
                            <Select id="matchup-contact" name="Matchup Contact">
                              <option>Myself</option>
                              <option>My Coach / Manager</option>
                            </Select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="block text-sm font-bold text-gray-300 mb-2 uppercase">What is your stance? <span className="text-red-500">*</span></div>
                            <div className="flex items-center space-x-6 mt-2">
                                {stances.map(stance => (
                                    <label key={stance} className="flex items-center space-x-2 text-gray-300">
                                        <input type="radio" name="Stance" value={stance} required className="h-4 w-4 bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500"/>
                                        <span className="uppercase">{stance}</span>
                                    </label>
                                ))}
                            </div>
                          </div>
                          <div>
                              <Label htmlFor="years-training" required>Years Training</Label>
                              <Select id="years-training" name="Years Training" required>
                                  {trainingYearsOptions.map(opt => <option key={opt} value={opt} disabled={opt === 'Select...'}>{opt}</option>)}
                              </Select>
                              <HelpText isItalic>PLEASE BE HONEST.</HelpText>
                          </div>
                        </div>
                        <div>
                            <Label htmlFor="background" required>What is your background?</Label>
                            <HelpText isItalic>PLEASE CHECK ALL THAT APPLY</HelpText>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-2">
                              {backgrounds.map(option => (
                                  <label key={option} className="flex items-center space-x-3 text-gray-300">
                                      <input type="checkbox" name="background[]" value={option} className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500" />
                                      <span className="text-sm uppercase">{option}</span>
                                  </label>
                              ))}
                              <div className="flex items-center space-x-3">
                                  <input type="checkbox" id="background-other-checkbox" name="background[]" value="Other" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500" />
                                  <Input type="text" name="background-other" placeholder="Other" className="flex-1"/>
                              </div>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="fight-style" required>What is your fight style?</Label>
                             <Select id="fight-style" name="Fight Style" required>
                                {fightStyleOptions.map(opt => <option key={opt} value={opt} disabled={opt === 'Select...'}>{opt}</option>)}
                            </Select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="block text-sm font-bold text-gray-300 mb-2 uppercase">Have you ever obtained the rank of black belt in any martial arts?</div>
                            <div className="flex items-center space-x-6 mt-2">
                                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="Black Belt" value="Yes" className="h-4 w-4 bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500"/><span>Yes</span></label>
                                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="Black Belt" value="No" className="h-4 w-4 bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500"/><span>No</span></label>
                            </div>
                          </div>
                          <div>
                              <Label htmlFor="bjj-rank" required>What is your bjj rank?</Label>
                              <Input type="text" id="bjj-rank" name="BJJ Rank" required />
                              <HelpText isUppercase>IF NO RANK, PLEASE LIST "NO RANK"</HelpText>
                          </div>
                        </div>
                        <div>
                            <Label htmlFor="anything-else">Is there anything else we should know about you?</Label>
                            <Textarea id="anything-else" name="Anything Else" rows={4} />
                             <HelpText isUppercase>IF NONE, LEAVE BLANK</HelpText>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="text-center pt-8 mt-8 border-t border-gray-700">
            <button
              type="submit"
              className="inline-block bg-red-600 text-white font-bebas text-2xl px-12 py-3 rounded-md tracking-wider hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FightForUsPage;