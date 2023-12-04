import React, { memo } from 'react'
import { Link } from 'react-router-dom';

function ContactItem(props) {
  const { contact } = props;

  return (
    <tr key={contact.no}>
      <td>{contact.no}</td>
      <td><Link to={'/contact/' + contact.no}>{contact.name}</Link></td>
      <td>{contact.tel}</td>
      <td>{contact.address}</td>
      <td><img src={contact.photo} alt="증명 사진" width="70px" /></td>
    </tr>
  )
}

export default memo(ContactItem);
