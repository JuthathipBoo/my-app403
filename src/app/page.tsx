import Image from "next/image";
import TextInput from "./component/TextInput";
import AlertBox from "./component/AlertBox";
import React from React

export default function Home() {
  const [showAlert , setShowAlert] = React.useState<boolean>(false)
  const [firstName , setFirstName] = React.useState<string>("")
  const [lastName , setLastName] = React.useState<string>("")

  const handelFirstNameChange = (e:any) =>{
    const val = e.target.value
    setFirstName(val)
  }
  const handelLastNameChange = (e:any) =>{
    const val = e.target.value
    setLastName(val)
  }

  const handelSendCilck = () =>{
    if(firstName === "" || lastName === ""){
      setShowAlert(true)
    }else{
      setShowAlert(false)
    }
  }

  const hideAlert = () => {
    setShowAlert(false)
  }

  React.useEffect(()=>{

  }, [firstName,lastName])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TextInput labelText="ชื่อ" inputId="txtFirstName" defaultValue="จุฑาทิพย์" onChange={handelFirstNameChange}/>
      <TextInput labelText="นามสกุล" inputId="txtLastName" onChange={handelLastNameChange}/>
      <button id="btnSend" onClick={handelSendCilck}>{"ส่งข้อมูล"}</button>
      <AlertBox alertText="กรอกข้อมูลไม่ครบ กรุณากรอกก่อน" alertButtonText="ตกลง" isShow onclick={hideAlert} />

    </div>
  );
}
