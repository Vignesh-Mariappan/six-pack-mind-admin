
// import { Button, Form, Input, Typography } from 'antd';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase/config';
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// import { Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';


// const { Title } = Typography;

// const LoginPage = () => {
//     // const [ user ] = useAuthState(auth);
//     const [ user, setUser ] = useState(null);

//     // useEffect(() => {
//     //     const unsubscription = onAuthStateChanged(auth, user => {
//     //         if (user) {
//     //             setUser(user)
//     //         } else {
//     //             setUser(null)
//     //         }
//     //     });

//     //     return () => {
//     //         unsubscription && unsubscription();
//     //     }
//     // }, [])

//     const onFinish = (values) => {
//         console.log('Success:', values);

//         // signInWithEmailAndPassword(auth, values?.username, values?.password)
//         //     .then((userCredential) => {
//         //         // Signed in 
//         //         const user = userCredential.user;
//         //         console.log('User:', user);
//         //     })
//         //     .catch((error) => {
//         //         const errorCode = error.code;
//         //         const errorMessage = error.message;
//         //         console.error('Login failed:', errorCode, errorMessage)
//         //     });
//     };

//     console.log('user ', user)

//     // if (user?.email === 'blessedconsciousnessmovement@gmail.com') {
//     //     return <Navigate to='/' />
//     // }

//     return (
//         <div className='login-page'>
//             <div className="login-page-wrapper">
//                 <Title level={2}>Six Pack Mind</Title>
//                 <Form
//                     name="basic"
//                     labelCol={{
//                         span: 8,
//                         }}
//                         wrapperCol={{
//                         span: 16,
//                         }
//                     }
//                     style={{
//                     }}
//                     initialValues={{
//                     remember: true,
//                     }}
//                     onFinish={onFinish}
//                     autoComplete="off"
//                 >
//                     <Form.Item
//                     label="Username"
//                     name="username"
//                     rules={[
//                         {
//                         required: true,
//                         message: 'Please input your username!',
//                         },
//                     ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                     label="Password"
//                     name="password"
//                     rules={[
//                         {
//                         required: true,
//                         message: 'Please input your password!',
//                         },
//                     ]}
//                     >
//                         <Input.Password />
//                     </Form.Item>

//                     <Form.Item
//                     wrapperCol={{
//                         offset: 8,
//                         span: 16,
//                     }}
//                     >
//                         <Button type="primary" htmlType="submit">
//                             Submit
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     )
// }

// export default LoginPage