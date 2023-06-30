import React from 'react'

const MemberDetails = ({user, setUser}) => {

    console.log(user)
  return (
    <div>{user&& user.member.id}</div>
  )
}

export default MemberDetails