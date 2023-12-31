
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './UserDetails.scss'
import { Button } from '@mui/material';
import {User} from '../UserInterface';
import {motion} from 'framer-motion'
import Navbar from '../Components/Navbar';
import Sidebar from '../Sidebar/Sidebar';


interface UserDetailsProps {
  users: User[];
}

interface RouteParams {
  id: any;
}

const UserDetails: React.FC<UserDetailsProps> = ({ users }) => {
  const { id } = useParams<RouteParams|any>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id === undefined) {
      // Handle the case where id is not provided in the route
      return;
    }
    // Find the user with the matching ID from the API data
    const foundUser = users.find((u) => u.id === parseInt(id, 10));
    if (foundUser) {
      setUser(foundUser);
    } else {
      // Handle user not found
      setUser(null);
    }
  }, [id, users]);
  if (id === undefined) {
    return <div>No user ID provided</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }


const tierIcons:any = {
  1: (
    <>
    <div className="tier">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_5530_1562)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200"/>
  </g>
  <defs>
    <clipPath id="clip0_5530_1562">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_5530_1562)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200"/>
  </g>
  <defs>
    <clipPath id="clip0_5530_1562">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
    </>
  ),
  2: (
    <>
     <div className="tier">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_5530_1562)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200"/>
          </g>
          <defs>
            <clipPath id="clip0_5530_1562">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
            </div>
    </>
  ),
  3: (
    
      <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
        </svg>
            </>
    
  ),
};

const Tiers: React.FC<{ Tier: any }> = ({ Tier }) => {
  if (tierIcons[Tier]) {
    return (
      <div className="tier">
        {tierIcons[Tier]}
      </div>
    );
  } else {
    // Handle the case when Tier is not 1, 2, or 3
    return null;
  }
};



  // user card component
  const UserCard = ()=>{
    const amount = `${(user.money*2).toString().slice(0, 3)}, ${user.money.toString().slice(4, 7)}.00`
    return(
        <div className="user-card-component">
            <div className="personal-info">
                <div className="profile-container">
                    <div className="profile-pic"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M6.04053 35.1796C6.47961 32.2202 7.79365 29.6264 9.97961 27.4C12.7405 24.6 16.0732 23.2 19.9796 23.2C23.886 23.2 27.2204 24.6 29.9796 27.4C32.1796 29.6266 33.5062 32.2204 33.9593 35.1796M28.1405 14.0204C28.1405 16.247 27.3468 18.1532 25.7593 19.7408C24.1734 21.3408 22.253 22.1408 20.0001 22.1408C17.7594 22.1408 15.8409 21.3408 14.2409 19.7408C12.6534 18.1533 11.8596 16.247 11.8596 14.0204C11.8596 11.7673 12.6534 9.84679 14.2409 8.25959C15.8409 6.67367 17.7596 5.87991 20.0001 5.87991C22.2532 5.87991 24.1737 6.67367 25.7593 8.25959C27.3468 9.84711 28.1405 11.7674 28.1405 14.0204Z" stroke="#213F7D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                <div className="profile-bio">
                    <div className="bio-name">{user.name}</div>
                    <div className="bio-id">{user.guid.slice(0,8)}{user.guid.slice(11,13)}</div>
                </div>
                <div className="line"></div>
                <div className="user-stars">
                    <div className="tier-text">
                        User's Tier
                    </div>
                    <div>{<Tiers Tier={user.Tier}/>}</div>
                </div>
                <div className="line"></div>
                <div className="amount">
              <div className="amount-cash">  ₦{amount}</div>
              <div className="bank-name">{`${user.AccountNumber.toString().slice(0, 10)}1`}\{user.Bank}</div>
                </div>
                </div>
            </div>
                <div className="user-detail-links">
                    <div className="links active">Genral Details</div>
                    <div className="links">Documents</div>
                    <div className="links">Bank Details</div>
                    <div className="links">Loans</div>
                    <div className="links">Savings</div>
                    <div className="links">App and Systems</div>
                </div>
        </div>
    )
  }
  const PersonalDetails =()=>{
    return(
        <div className="personal-details-container">
            <div className="information-personal">
                <h2>Personal Information</h2>
                <div className="personal-table">
                    <table className='first-table'>
                        <tr className='testing'>
                            <th className='name th'> FULL NAME</th>
                            <th className='number th'>PHONE NUMBER</th>
                            <th className='email th'>EMAIL ADDRESS</th>
                            <th className='bvn th'>BVN</th>
                            <th className='gender th'>GENDER</th>
                        </tr>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.BVN.toString().slice(0, 9)}</td>
                            <td>{user.gender}</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>MARITAL STATUS</th>
                            <th>CHILDREN</th>
                            <th>TYPE OF RECIDENCE</th>
                        </tr>
                        <tr>
                            <td>{user.materialStatus}</td>
                            <td>{user.children}</td>
                            <td>{user.house}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="information-personal">
                <h2>Education and Employment</h2>
                <div className="personal-table">
                    <table className='first-table'>
                        <tr className='testing'>
                            <th className='name th'> LEVEL OF EDUCATION</th>
                            <th className='number th'>EMPLOYMENT STATUS</th>
                            <th className='email th'>SECTOR OF EMPLOYMENT</th>
                            <th className='bvn th'>DURATION OF EMPLOYMENT</th>
                            
                        </tr>
                        <tr>
                            <td>{user.EducationLevel}</td>
                            <td>{user.EmploymentStatus}</td>
                            <td>{user.Sector}</td>
                            <td>{user.Years}</td>
                          
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>OFFICIAL EMAIL</th>
                            <th>MONTHLY INCOME</th>
                            <th>LOAN REPAYMENT</th>
                        </tr>
                        <tr>
                            <td>{user.email}</td>
                            <td>{`₦${(user.money*3).toString().slice(0, 3)},${user.money.toString().slice(4, 7)}.00`} - { `₦ ${(user.money*4).toString().slice(0, 3)},${user.money.toString().slice(4, 7)}.00`}</td>
                            <td> ₦{`${(user.money).toString().slice(0, 3)},${user.money.toString().slice(4, 7)}.00`}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="information-personal">
                <h2>Socials</h2>
                <div className="personal-table">
                  
                    <table style={{marginTop:'2rem'}}>
                        <tr>
                            <th>TWITTER</th>
                            <th>FACEBOOK</th>
                            <th>INSTAGRAM</th>
                        </tr>
                        <tr>
                            <td>{user.social}</td>
                            <td>{user.name}</td>
                            <td>{user.social}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="information-personal">
                <h2>Guarantors</h2>
                <div className="personal-table">
      
                    <table style={{marginTop:'2rem'}}>
                        <tr>
                            <th>FULL NAME</th>
                            <th>PHONE NUMBER</th>
                            <th>EMAIL ADDRESS</th>
                            <th>RELATIONSHIP</th>
                        </tr>
                        <tr>
                            <td>{user.friends[1].name}</td>
                            <td>{user.friends[1].phone}</td>
                            <td>{user.friends[1].email}</td>
                            <td>{user.friends[1].relationship}</td>
                        </tr>
                    </table>
                </div>
            </div>
          
            <div className="information-personal">
                
                <div className="personal-table" style={{marginTop:'4rem'}}>
                  
                    <table style={{marginTop:'2rem'}}>
                        <tr>
                            <th>FULL NAME</th>
                            <th>PHONE NUMBER</th>
                            <th>EMAIL ADDRESS</th>
                            <th>RELATIONSHIP</th>
                        </tr>
                        <tr>
                            <td>{user.friends[0].name}</td>
                            <td>{user.friends[0].phone}</td>
                            <td>{user.friends[0].email}</td>
                            <td>{user.friends[0].relationship}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
  }
  return (
    <motion.div
    className="box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    }}
      >
         <div className="">
            <Navbar/>
         <div className="flexed">
            <div className="side-bar"><Sidebar/></div>
            <div className="flexed-users" style={{height:'70vw', overflowY:'scroll'}}>
            <div className='user-details-container'>
              <NavLink to={'/home'} className="back-function">
                  <div className="back-text-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z" fill="#545F7D"/>
      </svg>
                  </div>
                  <div className="back-text">Back to Users</div>
              </NavLink>
              <div className="user-detail-header">
                  <div className="user-detail-header-text">User Details</div>
                  <div className="user-header-button_container">
                      <div className="user-button-container"><Button className='blacklist-button'>BlackList User</Button></div>
                      <div className="user-button-container"><Button className='activate-button'>Activate User</Button></div>
                  </div>
              </div>
              <div className="user-card-container">
                  <UserCard/>
              </div>
              <div className="personal-information-container">
                  <PersonalDetails/>
              </div>
              
      
          </div>
            </div>
         </div>
         </div>
      </motion.div>
        );
};

export default UserDetails;
