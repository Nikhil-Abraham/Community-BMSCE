import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import {Button, Form, Loader} from "semantic-ui-react";
import { useRouter } from "next/router";

const NewUser = () => {
  const [form, setForm] = useState({  title:""})
  
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors ] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmit(true);

   }

  const handleChange = (e) => {
    setForom({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err={};
    if(!form.title){
      err.title = 'Email is required';
    }
    return err;
  }

  return(
    <div>
    <div class="text-2xl font-Nato p-5"  >Join the Community </div>
    <div className="form-container" class="mx-20 border-solid border-4 border-custom_grey-500/50 rounded-lg w-1/4 p-8">
      <div>
        {
            isSubmit
                ? <Loader active inline='centered' />
                : <Form onSubmit={handleSubmit}>
                    <Form.Input
                        fluid
                        label='Email'
                        placeholder='Enter email'
                        name='Email'
                        onChange={handleChange}

                       />
                    <Button type='submit'>Signup</Button>
                </Form>
        }
      </div>
      </div>
      </div>
     
  )
}


export default NewUser;




// import Head from "next/head";
// import Image from "next/image";
// import Header from "../Components/Header";

// export default function Home() {
//   return (
//     <div class="bg-custom_white h-screen  text-custom_grey-150 font-Nato font-semibold   ">
//       <Header />

//       <div class="w-screen bg-custom_white p-20 flex justify-evenly">
//         <div class="text-2xl font-Nato p-5">Join the Community</div>
//         <div class="mx-20 border-solid border-4 border-custom_grey-500/50 rounded-lg w-1/4 p-8">
//           <form action="/intro" method="post" name="register-form">
//             <div class="form-group px-6 py-6">
//               <label class="form-label" for="email">
//                 Email
//               </label>
//               <br />
//               <input
//                 type="email"
//                 class="form-control mt-1 rounded-lg ..."
//                 placeholder="    Enter email"
//                 id="email"
//               ></input>
//             </div>
//             <div class="form-group px-6 py-6 ...">
//               <label class="form-label" for="pwd">
//                 Password:
//               </label>
//               <br />
//               <input
//                 type="password"
//                 class="form-control mt-1 rounded-lg ..."
//                 placeholder="    Enter password"
//                 id="pwd"
//               ></input>
//             </div>
//             <div class="form-group px-6 py-6 ...">
//               <label class="form-label" for="pwd">
//                 Confirm Password:
//               </label>
//               <br />
//               <input
//                 type="password"
//                 class="form-control mt-1 rounded-lg ..."
//                 placeholder="    Enter password"
//                 id="pwd"
//               ></input>
//             </div>
//             <div class="register-btn  bg-custom_blue hover:bg-custom_cyan  rounded-lg mx-20 mt-6 w-20 h-8 px-3 p-1 ...">
//               <a href="">Signup</a>
//             </div>
//           </form>
//         </div>
//       </div>
     
//     </div>
//   );
// }
