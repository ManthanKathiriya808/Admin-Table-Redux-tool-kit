import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";
import styled from "styled-components";
export const DeleteAllUser = () => {

  const dispatch = useDispatch()

  const DeleteAll = ()=>{
    // console.log("delete ALl")
    dispatch(deleteUsers())
  }
// console.log(data)
  return (
    <Wrapper>
      
      <button className="btn" onClick={DeleteAll}>Clear All Users    </button>
   </Wrapper>
  )
};


const Wrapper = styled.section`
 .btn {
  border: none;
  opacity: 0.9;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 7px 13px;
  border-radius: 4px;
  letter-spacing: 0.3px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: transform 0.5s ease;
  background: linear-gradient(135deg, #7f6de3 0%, #11aaf1 100%);
  margin-top:2rem;
}
`