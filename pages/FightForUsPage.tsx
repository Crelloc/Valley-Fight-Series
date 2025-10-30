import React from 'react';

const FormSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6 pt-8 mt-8 border-t border-gray-700 first:mt-0 first:pt-0 first:border-none">
    <h3 className="text-2xl font-bebas text-red-600 tracking-wider">{title}</h3>
    {children}
  </div>
);

const Label: React.FC<{ htmlFor: string; required?: boolean; children: React.ReactNode }> = ({ htmlFor, required, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-bold text-gray-300 mb-2">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
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

const CheckboxGrid: React.FC<{ name: string; options: string[]; required?: boolean }> = ({ name, options, required }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {options.map(option => (
      <label key={option} className="flex items-center space-x-2 text-gray-300">
        <input type="checkbox" name={`${name}[]`} value={option} required={required} className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500" />
        <span>{option}</span>
      </label>
    ))}
  </div>
);


const FightForUsPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your submission! We will review your information and be in contact if there is an opportunity.');
    // In a real app, you would handle form submission here (e.g., send data to a server)
  };
  
  const weightClasses = [
    "Atomweight (≤105lbs)", "Strawweight (105-115lbs)", "Flyweight (115-125lbs)",
    "Bantamweight (125-135lbs)", "Featherweight (135-145lbs)", "Lightweight (145-155lbs)",
    "Welterweight (155-170lbs)", "Middleweight (170-185lbs)", "Light-Heavyweight (185-205lbs)",
    "Cruiserweight (205-230lbs)", "Heavyweight (230-265lbs)", "Super-Heavyweight (265lbs+)"
  ];
  
  const backgrounds = ["Boxing", "Muay Thai", "Wrestling", "Traditional Martial Arts", "Jiu Jitsu"];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bebas tracking-wider text-white">Fight For VFS - Create Fighter Profile</h2>
        <p className="text-gray-400 mt-2 max-w-3xl mx-auto">
         The purpose of this form is to gather information from fighters who would like to compete on a Valley Fight Series show. Please complete all required fields honestly. Completing this form will submit you for matchmaking. Thank you!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-700 rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          
          <FormSection title="Personal Info">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="first-name" required>Fighter Name</Label>
                <Input type="text" id="first-name" name="first-name" placeholder="First" required />
              </div>
              <div>
                <Label htmlFor="last-name" required>&nbsp;</Label>
                <Input type="text" id="last-name" name="last-name" placeholder="Last" required />
              </div>
            </div>
             <div>
                <Label htmlFor="nickname">Ring Name / Nickname</Label>
                <Input type="text" id="nickname" name="nickname" placeholder="If none, leave blank" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <Label htmlFor="dob" required>Date of Birth</Label>
                  <Input type="date" id="dob" name="dob" required />
               </div>
               <div>
                  <Label htmlFor="gender" required>Gender</Label>
                  <Select id="gender" name="gender" required>
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
               </div>
            </div>
             <div>
                <Label htmlFor="location" required>Where are you located?</Label>
                <Input type="text" id="location" name="location" placeholder="City, State, and Zipcode" required />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <Label htmlFor="height" required>What is your height?</Label>
                  <Input type="text" id="height" name="height" placeholder="e.g., 5'7&quot;" required />
               </div>
               <div>
                  <Label htmlFor="current-weight" required>What do you currently weigh?</Label>
                  <Input type="number" id="current-weight" name="current-weight" placeholder="in lbs" required />
               </div>
            </div>
             <div>
                <Label htmlFor="weight-class" required>What is your weight class?</Label>
                <p className="text-xs text-gray-400 mb-2">Please select all of the weight classes that apply to you.</p>
                <CheckboxGrid name="weight-class" options={weightClasses} />
            </div>
             <div>
                <Label htmlFor="photo">Upload a photo of yourself from the waist up</Label>
                 <p className="text-xs text-gray-400 mb-2">Preferred, but not required.</p>
                <Input type="file" id="photo" name="photo" accept="image/*" className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"/>
            </div>
          </FormSection>

          <FormSection title="Contact Info">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" required>Fighter Email Address</Label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <Label htmlFor="phone" required>Fighter Phone Number</Label>
                  <Input type="tel" id="phone" name="phone" required />
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="instagram">What is your Instagram?</Label>
                  <Input type="text" id="instagram" name="instagram" placeholder="If none, leave blank" />
                </div>
                <div>
                  <Label htmlFor="facebook">What is your Facebook?</Label>
                  <Input type="text" id="facebook" name="facebook" placeholder="If none, leave blank" />
                </div>
             </div>
             <div>
                <Label htmlFor="contact-method" required>Preferred Contact Method</Label>
                <Select id="contact-method" name="contact-method" required>
                    <option>Email</option>
                    <option>Phone Call</option>
                    <option>Text Message</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                </Select>
             </div>
          </FormSection>

          <FormSection title="Event & Match Type">
              <div>
                  <Label htmlFor="bout-type" required>Choose Bout Type</Label>
                  <Select id="bout-type" name="bout-type" required>
                      <option>MMA</option>
                      <option>Boxing</option>
                      <option>Muay Thai</option>
                      <option>BJJ</option>
                      <option>Pankration</option>
                  </Select>
              </div>
          </FormSection>

          <FormSection title="Background & Experience">
             <div>
                <Label htmlFor="gym" required>What gym/team do you represent?</Label>
                <Input type="text" id="gym" name="gym" placeholder='If none, list "Independent"' required />
            </div>
             <div>
                <Label htmlFor="matchup-contact">Who should we contact regarding matchups?</Label>
                <Input type="text" id="matchup-contact" name="matchup-contact" />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <Label htmlFor="stance" required>What is your stance?</Label>
                  <Select id="stance" name="stance" required>
                      <option>Orthodox</option>
                      <option>Southpaw</option>
                      <option>Switch</option>
                  </Select>
               </div>
               <div>
                  <Label htmlFor="years-training" required>Years Training</Label>
                  <Input type="number" id="years-training" name="years-training" placeholder="Please be honest." required />
               </div>
            </div>
             <div>
                <Label htmlFor="background" required>What is your background?</Label>
                <p className="text-xs text-gray-400 mb-2">Please check all that apply.</p>
                <CheckboxGrid name="background" options={backgrounds} />
            </div>
             <div>
                <Label htmlFor="fight-style" required>What is your fight style?</Label>
                <Textarea id="fight-style" name="fight-style" rows={3} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {/* FIX: Replaced unsupported `Label as="div"` with a `div` element with the same styling. */}
                <div className="block text-sm font-bold text-gray-300 mb-2">Have you ever obtained the rank of Black Belt in any martial arts? <span className="text-red-500">*</span></div>
                <div className="flex items-center space-x-6 mt-2">
                    <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="black-belt" value="yes" required className="h-4 w-4 bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500"/><span>Yes</span></label>
                    <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="black-belt" value="no" required className="h-4 w-4 bg-gray-700 border-gray-600 text-red-600 focus:ring-red-500"/><span>No</span></label>
                </div>
              </div>
               <div>
                  <Label htmlFor="bjj-rank" required>What is your BJJ rank?</Label>
                  <Input type="text" id="bjj-rank" name="bjj-rank" placeholder='If no rank, please list "No Rank"' required />
               </div>
            </div>
             <div>
                <Label htmlFor="anything-else">Is there anything else we should know about you?</Label>
                <Textarea id="anything-else" name="anything-else" rows={4} placeholder="If none, leave blank" />
            </div>
          </FormSection>
          
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