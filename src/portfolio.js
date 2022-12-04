import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'LHG.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'LAHIRU GUNAWARDHANA',
  role: 'ENGINEERING UNDERGRADUATE',
  description:
    'I\'m a final year undergraduate at Department of Electrical and Electronic Engineering,University of Peradeniya.',
  resume: 'https://drive.google.com/folderview?id=1fu8IXXezP6UlIXVQoljzyB2J4pVr7RTs',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Low Voltage Network Optimization With Photovoltaics  ',
    description:
      'The integration of PV systems into the Low voltage networks become very challenging to the CEB(Ceylon Electricity Board) due to technical issues arise with the PV integration such as Reverse power flow,Voltage variation & power quality issues.This project is to find some methods to over come those problems.  .',
    sourceCode: '#',
    livePreview: '#',
  },
  {
    name: 'Abnormal Event Detector of a Power Supply',
    description:
      'This detector will detect abnormal events such as impulse voltages,over voltages & variation of the system frequency that arises with the switching,Lightning etc..',
    sourceCode: '#',
    livePreview: '#',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'OpenDSS',
  'PSSE',
  'eTap',
  'MPLAB',
  'Comsol',
  'PSCAD'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'lahiruhashan11@gmail.com',
}

export { header, about, projects, skills, contact }