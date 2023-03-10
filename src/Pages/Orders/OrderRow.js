import React, { useEffect, useState } from 'react';

const OrderRow = ({order,handleDeleteOrder,updateOrderStatus}) => {
    const {serviceName,phone,email,service,customer,price,_id,status}=order;
    const[orderService,setOrderService]=useState({})

    useEffect(()=>{
        fetch(`https://genius-car-server-seven-tawny.vercel.app/services/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderService(data));
    },[service])
    
    return (
        <tr>
                        <th>
                        <label>
                        <button onClick={()=>handleDeleteOrder(_id)} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    orderService && 
                                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {serviceName}
                        <br/>
                        <span className="badge badge-ghost badge-sm">$ {price}</span>
                        </td>
                        <td>Purple</td>
                        <th>
                        <button onClick={()=>updateOrderStatus(_id)} className="btn btn-ghost btn-xs">
                            {
                                status ? status :'Pendding'
                            }
                        </button>
                        </th>
     </tr>
    );
};

export default OrderRow;