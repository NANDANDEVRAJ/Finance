import React from 'react'
import "./Billing.css"

export default function Billing() {
    return (
        <div className="BillingBox">
        <div className='BillingLg'>
        <h3 className='BillingLgTitle'>Billing and Balance
            </h3>
        <div className='forms'>
            <form>
                <div className='form_one'>
                <div>Order ID:</div>
                <input type="text"/>
                <div>Order Status:</div>
                <input type="text"/>
                </div>

                <div className='form_two'>
                <div>Customer:</div>
                <input type="text"></input>
                <div>Added Date:</div>
                <input type="date"></input>
                </div>
                
                <div className='form_three'>
                <div>Total:</div>
                <input type="text"></input>
                <div>Modified Date:</div>
                <input type="date"></input>
                </div>
            </form>
                <div className='Billingbtn'><button className='btn btn-success'>Submit</button></div>
        </div><br/>
        <h3>Billings</h3>
            <table className='BillingLgTable' border="1" >
                <thead>
                <tr className='BillingLgTr'>
                    <th className='BillingLgTh'>Order ID</th>
                    <th className='BillingLgTh'>Customer</th>
                    <th className='BillingLgTh'>Status</th>
                    <th className='BillingLgTh'>Total</th>
                    <th className='BillingLgTh'>Date Added</th>
                    <th className='BillingLgTh'>Date Modified</th>
                </tr>
                </thead>
                <tbody>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a href="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a href="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a hef="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a href="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a href="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                </tbody>
                
            </table>
        <div><br/>
        <h3>Balance Management</h3>
        <table className='BillingLgTable' border="1"  >
                <thead>
                <tr className='BillingLgTr'>
                <th className='BillingLgTh'>Order ID</th>
                    <th className='BillingLgTh'>Customer</th>
                    <th className='BillingLgTh'>Status</th>
                    <th className='BillingLgTh'>Total</th>
                    <th className='BillingLgTh'>Date Added</th>
                    <th className='BillingLgTh'>Date Modified</th>
                </tr>
                </thead>
                <tbody>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a href="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a href="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a hef="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                <tr className='BillingLgTr'>
                    <td className='BillingLgUser'>
                        <a href="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                <tr className='BillingLgTr'>    
                    <td className='BillingLgUser'>
                        <a href="#" className="LinkItem"><span className='BillingLgName'>#902</span></a>
                    </td>
                    <td className='BillingLgId'>James</td>
                    <td className='BillingLgBalance'>Completed</td>
                    <td className='BillingLgType'>$123.00</td>
                    <td className='BillingLgStatus'>01/11/21</td>
                    <td className='BillingLgAmt'>01/01/22</td>
                </tr>
                </tbody>
                
            </table>
            </div>

        </div>
        

        </div>
    )
}
