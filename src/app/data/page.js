'use client'

import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setInputValue } from "@/lib/features/userSlice";
import Link from 'next/link';

const page = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.user.userArray);
  const [dataUser, setdataUser] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  const getDataUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(setInputValue(json)))
      .catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    if (data.length === 0) {
      getDataUser();
    };
    setdataUser(data);
  }, [data])

  const searchByName = () => {
    if (searchTerm === null || searchTerm === '') {
      setdataUser(data);
    } else {
      const results = dataUser.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setdataUser(results);
    }
  };

  return (
    <>
      <Link href='/user'>Đi user</Link>
      <div>
        <label>Tìm kiếm</label>
        <input
          onChange={e => setsearchTerm(e.target.value)}
        ></input>
        <button onClick={searchByName}>Tìm</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((data, index) => {
            return (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </>
  )
}

export default page