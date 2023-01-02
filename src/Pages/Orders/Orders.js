import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user,logOut}=useContext(AuthContext)
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch(`https://genius-car-server-seven-tawny.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('user-token')}`
            }
        })
        .then(res=>{
            if(res.status===403 || res.status===401){
                logOut()
            }
            return res.json()
        })
        .then(data=>{
            setOrders(data)
        })
    },[user?.email])

    const handleDeleteOrder=id=>{
        const procced=window.confirm('You Want Delete It? ');
        if(procced){
            fetch(`https://genius-car-server-seven-tawny.vercel.app/orders/${id}`,{
                method:'DELETE',
                headers:{
                    authorization:`Bearer ${localStorage.getItem('user-token')}`
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    const remaing=orders.filter(ordr=>ordr._id!==id)
                    setOrders(remaing)
                }
            })
        }
    }

    const updateOrderStatus=id=>{
        fetch(`https://genius-car-server-seven-tawny.vercel.app/orders/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('user-token')}`
            },
            body:JSON.stringify({status:'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                const remaing = orders.filter(odr=>odr._id!==id)
                const approving=orders.find(odr=>odr._id===id)
                approving.status='Approved';
                const newOrders=[approving,...remaing]
                setOrders(newOrders)
                
            }
        })

    }
    return (
        <div>
            <h5 className="text-5xl text-center">You Have Orders {orders.length}</h5>
            <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {
                            orders.map(order=><OrderRow
                                key={order._id}
                                order={order}
                                handleDeleteOrder={handleDeleteOrder}
                                updateOrderStatus={updateOrderStatus}
                            ></OrderRow>)
                        }

                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;