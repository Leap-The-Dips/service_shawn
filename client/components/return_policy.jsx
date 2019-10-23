import React from 'react';
import styled from 'styled-components';

const ReturnPolicy = (props) => {
  if (props.returns.exist) {
    return (
      <Returns>
        <Header>Return Policy</Header>
        <InfoTables>
          <tbody>
            <tr>
              <td>After receiving the item, contact seller within</td>
              <td>Refund will be given as</td>
              <td>Return Shipping</td>
            </tr>
            <tr>
              <td>{props.returns.deadline}</td>
              <td>{props.returns.type}</td>
              <td>{props.returns.pay_shipping} Days</td>
            </tr>
          </tbody>
        </InfoTables>
        <Policy>Refer to <Link href="#">eBay Return policy</Link> for more details. You are covered by the <Link href="#">eBay Money Back Guarantee</Link> if you receive an item that is not as described in the listing.</Policy>
      </Returns>
    )
  } else {
    return (
      <Returns>
        <Header>Return Policy</Header>
        <InfoTables>
          <tbody>
            <tr>
              <td>After receiving the item, contact seller within</td>
              <td>Refund will be given as</td>
              <td>Return Shipping</td>
            </tr>
            <tr>
              <td>Seller does not offer returns</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </InfoTables>
        <Policy>Refer to eBay Return policy for more details. You are covered by the eBay Money Back Guarantee if you receive an item that is not as described in the listing.</Policy>
      </Returns>
    )

  }
}

export default ReturnPolicy

const Returns = styled.div`
margin-top: 15px;
border: 1px solid black;
padding: 0px 20px 20px 10px
`
const Header = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  font-size: 16px;
`
const InfoTables = styled.table`
  padding-left: 10px;
  width:100%;
  td {
    border-bottom: 1px solid black;
    padding: 5px 10px 5px 15px;
  }
  tr: nth-child(odd) {background-color: #f2f2f2}
`
const Policy = styled.p`
  padding-left: 10px;
`
const Link = styled.a`
  text-decoration:none;
  font-color: blue;
`