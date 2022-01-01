import React,{useState,useRef} from 'react'
import "./Report.css"

export default function UserList() {
    return (
        <>
        <div className="reportBox">
        <div className='reportLg'>
        <h3 className='reportLgTitle'>Report
            </h3>
        <div className='forms'>
            <form>
                <div className='form_one'>
                <div>User ID:</div>
                <input type="text"/>
                <div>Status:</div>
                <input type="text"/>
                </div>

                <div className='form_two'>
                <div>Product ID:</div>
                <input type="text"></input>
                <div>From Date:</div>
                <input type="date"></input>
                </div>
                
                <div className='form_three'>
                <div>Transaction ID:</div>
                <input type="text"></input>
                <div>To Date:</div>
                <input type="date"></input>
                </div>
            </form>
                <div className='reportbtn'><button className='btn btn-success'>Submit</button></div>
        </div>
                <h3>Report Details: </h3>
            <table className='reportLgTable' >
                <thead>
                <tr className='reportLgTr'>
                    <th className='reportLgTh'>Invoice ID</th>
                    <th className='reportLgTh'>User</th>
                    <th className='reportLgTh'>Product Title</th>
                    <th className='reportLgTh'>Type</th>
                    <th className='reportLgTh'>Status</th>
                    <th className='reportLgTh'>Amount</th>
                    <th className='reportLgTh'>Description</th>
                    <th className='reportLgTh'>Date Added</th>
                </tr>
                </thead>
                <tbody>
                <tr className='reportLgTr'>
                    <td className='reportLgUser'>
                        <a href="#" className="LinkItem"><span className='reportLgName'>#902</span></a>
                    </td>
                    <td className='reportLgId'>email@mail.com</td>
                    <td className='reportLgBalance'>HP Product</td>
                    <td className='reportLgType'>sold</td>
                    <td className='reportLgStatus'>debt</td>
                    <td className='reportLgAmt'>$234</td>
                    <td className='reportLgDpt'>Hp description</td>
                    <td className='reportLgDate'>01/01/2022</td>
                </tr>
                <tr className='reportLgTr'>
                    <td className='reportLgUser'>
                        <a href="#" className="LinkItem"><span className='reportLgName'>#902</span></a>
                    </td>
                    <td className='reportLgId'>email@mail.com</td>
                    <td className='reportLgBalance'>HP Product</td>
                    <td className='reportLgType'>sold</td>
                    <td className='reportLgStatus'>debt</td>
                    <td className='reportLgAmt'>$234</td>
                    <td className='reportLgDpt'>Hp description</td>
                    <td className='reportLgDate'>01/01/2022</td>
                </tr>
                <tr className='reportLgTr'>
                    <td className='reportLgUser'>
                        <a hef="#" className="LinkItem"><span className='reportLgName'>#902</span></a>
                    </td>
                    <td className='reportLgId'>email@mail.com</td>
                    <td className='reportLgBalance'>HP Product</td>
                    <td className='reportLgType'>sold</td>
                    <td className='reportLgStatus'>debt</td>
                    <td className='reportLgAmt'>$234</td>
                    <td className='reportLgDpt'>Hp description</td>
                    <td className='reportLgDate'>01/01/2022</td>
                </tr>
                <tr className='reportLgTr'>
                    <td className='reportLgUser'>
                        <a href="#" className="LinkItem"><span className='reportLgName'>#902</span></a>
                    </td>
                    <td className='reportLgId'>email@mail.com</td>
                    <td className='reportLgBalance'>HP Product</td>
                    <td className='reportLgType'>sold</td>
                    <td className='reportLgStatus'>debt</td>
                    <td className='reportLgAmt'>$234</td>
                    <td className='reportLgDpt'>Hp description</td>
                    <td className='reportLgDate'>01/01/2022</td>
                </tr>
                <tr className='reportLgTr'>
                    <td className='reportLgUser'>
                        <a href="#" className="LinkItem"><span className='reportLgName'>#902</span></a>
                    </td>
                    <td className='reportLgId'>email@mail.com</td>
                    <td className='reportLgBalance'>HP Product</td>
                    <td className='reportLgType'>sold</td>
                    <td className='reportLgStatus'>debt</td>
                    <td className='reportLgAmt'>$234</td>
                    <td className='reportLgDpt'>Hp description</td>
                    <td className='reportLgDate'>01/01/2022</td>
                </tr>
                </tbody>
                
            </table>
        </div>

        </div>
        </>
    )
}
