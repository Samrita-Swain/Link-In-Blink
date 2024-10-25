// import React, { useState } from 'react';
// import Swal from 'sweetalert2'

// const Form = () => {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
    
//     const formData = new FormData(event.target);
//     formData.append("access_key", "679610ed-ea09-496c-bc72-5ffc43bfc8e7");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//       }).then((res) => res.json());

//       if (res.success) {
//         Swal.fire({
//           title: "Sucess",
//           text: "Your message sent succesfully!",
//           icon: "success"
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something went wrong!",
//         });
//       }
//     } catch (error) {
//       setSuccess(false);
//       console.error("Error submitting form:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <label htmlFor="name">Full Name*</label>
//         <input type="text" placeholder="Enter Full Name" name="fullname" required />

//         <label htmlFor="email">Email Id*</label>
//         <input type="email" placeholder="Enter Email id" name="email" required />

//         <label htmlFor="message">Enter Your Message*</label>
//         <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message" required></textarea>
        
//         <button type="submit" disabled={loading}>
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
