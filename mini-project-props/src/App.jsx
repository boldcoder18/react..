import { Bookmark } from 'lucide-react'
import React from 'react'
import Card from './components/card'

const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    name: "Amazon",
    role: "Software Engineer",
    dataPosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://img.icons8.com/color/512/microsoft.png",
    name: "Microsoft",
    role: "Frontend Developer",
    dataPosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo51RaSL38xlksvpHe9OoUJhg5oB5vlyKqJm5fjqdgkA&s=10",
    name: "Google",
    role: "Full Stack Developer",
    dataPosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Apple",
    role: "iOS Developer",
    dataPosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    name: "Meta",
    role: "React Developer",
    dataPosted: "10 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMznz1zJ3fNTFggg26u-HrG1L7P1uQHJ4uqv7cishUA&s=10",
    name: "Netflix",
    role: "Backend Engineer",
    dataPosted: "4 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://discovertemplate.com/wp-content/uploads/2024/03/Nvidia.jpg",
    name: "NVIDIA",
    role: "AI/ML Engineer",
    dataPosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdKgyn51ollXX3OFU5sK40500Dnn3VXX2DmPNWlOUpw&s=10",
    name: "Oracle",
    role: "Cloud Engineer",
    dataPosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUf1jmzKMQ_qEo17t4bqAs4bvpSqeet_pmwlkLgXvqEw9mrvI0XQgTLo_K&s=10",
    name: "Adobe",
    role: "UI/UX Developer",
    dataPosted: "3 weeks ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0GR0ACfgIT2vMz8Yi4K91gnlf-bikEvIR0iFUgni7Q&s=10",
    name: "Tesla",
    role: "Software Engineer",
    dataPosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4A4fefVogl1BfvIt4be3kHB2ELPs8a6iDyJIifJ_o7w&s",
    name: "Spotify",
    role: "Frontend Engineer",
    dataPosted: "8 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$47/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmobqWk6N-n_CAZgsrHLoHfxDeQK_E2plcNr08K1QP5A&s=10",
    name: "Uber",
    role: "Backend Developer",
    dataPosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$54/hour",
    location: "Bengaluru, India",
  }

];



function App() {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {


        return

        <Card Logo={elem.brandLogo} company={elem.name} postDate={elem.dataPosted}
          role={elem.role} jobtime={elem.tag1} jobrole={elem.tag2} money={elem.pay}
          location={elem.location} />





      })}


    </div>



  )
}

export default App