import React, { useState } from 'react'

import Pagination from '@mui/material/Pagination';
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import './User.scss'
import { Card } from './Card'

export const UserContainer = () => {

  const [page, setPage] = React.useState(1);
  const itemsPerPage = 10; // Number of items to display per page
// number of items displayed per page 
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // pagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // pagination component
   const  PaginationControlled:React.FC=()=> {
    return (
      <Stack spacing={2}>
        <Pagination count={51} page={page} shape='rounded' onChange={handleChange} />
      </Stack>
    );
  }




  //  table component 
  type User ={
    name: String,
    userid: number
}  
interface userProps {
   mainUsers:User[]
}
  const Table:React.FC =()=>{
    const url = 'https://run.mocky.io/v3/afbe6ec2-cae7-48e7-8d7f-8e2a4376c3c2';
    const [data, setData] = useState([])
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
            
          }
          const data = await response.json();
          setData(data);
          console.log(data);
        } catch (error) {
          
          console.error('Error fetching data:', error);
          return(
            <div className="failed">failed to fetch users</div>
          )
        }
      };
  
      fetchData();
  
  
    }, []);

  
    console.log(data.length);
    const Page= data.slice(startIndex, endIndex)
    const Newtable = Page.map((user:any)=>{
     
      
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
  
      const setmonth =(e:number)=>{
        if(e>=1 && e<=12)
        return months[e-1]
      }

    const status=user.status
   const date = `${setmonth(user.month)}-${user.year}-${user.day} 10:00 AM`
   const style= 
    {
      backgroundColor:status==='Active'?'rgba(57, 205, 98, 0.2)':status==='Blacklist'?'rgba(228, 3, 59, 0.2)':status==='Inactive'?'rgba(84, 95, 125, 0.2)':status==='Pending'?'rgba(233, 178, 0, 0.2)':'',
      color:status==='Active'?'rgba(57, 205, 98, 1)':status==='Blacklist'?'rgba(228, 3, 59, 1)':status==='Inactive'?'rgba(84, 95, 125, 1)':status==='Pending'?'rgba(233, 178, 0, 1)':'',
    }

    // details component
const Details:React.FC<userProps>=({mainUsers})=>{
  return(
    <div className="details-main-container">
      <NavLink to={`/userdetails/${mainUsers}`} className="view-details details">
        <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M15.4533 7.44011L15.4519 7.43845C15.0398 6.92184 14.0948 5.82505 12.7977 4.85586C11.4993 3.88564 9.83832 3.03611 7.99968 3.03611C6.16104 3.03611 4.50011 3.88561 3.20166 4.85582C1.9029 5.82627 0.957157 6.92466 0.545819 7.44047C0.274826 7.76662 0.277249 8.2343 0.544833 8.57367L0.544827 8.57368L0.545641 8.57468C0.956296 9.08187 1.90229 10.1769 3.20172 11.1459C4.50012 12.1141 6.16105 12.9636 7.99968 12.9636C9.83832 12.9636 11.4993 12.1141 12.7977 11.1438C14.0966 10.1732 15.0424 9.07445 15.4537 8.55838C15.7074 8.2495 15.7071 7.74924 15.4533 7.44011ZM7.99968 11.7561C6.48691 11.7561 5.06807 11.0225 3.92942 10.172C2.84501 9.36201 2.02502 8.4537 1.63351 7.9981C2.01625 7.53083 2.83628 6.6224 3.92306 5.81583C5.06351 4.96943 6.48657 4.24347 7.99968 4.24347C9.51274 4.24347 10.9317 4.96936 12.0701 5.81576C13.1557 6.62284 13.9761 7.53202 14.3662 7.99979C13.9762 8.46752 13.1557 9.3767 12.0701 10.1838C10.9317 11.0302 9.51274 11.7561 7.99968 11.7561Z" fill="#545F7D" stroke="#545F7D" stroke-width="0.2"/>
  <path d="M8.00014 4.90818C6.29675 4.90818 4.9083 6.2967 4.9083 8.00002C4.9083 9.70334 6.29682 11.0919 8.00014 11.0919C9.70346 11.0919 11.092 9.70334 11.092 8.00002C11.092 6.29669 9.70346 4.90818 8.00014 4.90818ZM8.00014 9.88386C6.96726 9.88386 6.11646 9.0324 6.11646 8.00018C6.11646 6.96728 6.96732 6.1165 8.00014 6.1165C9.03296 6.1165 9.88382 6.96736 9.88382 8.00018C9.88382 9.033 9.03296 9.88386 8.00014 9.88386Z" fill="#545F7D" stroke="#545F7D" stroke-width="0.2"/>
</svg></div>
        <div className="">View Details</div>
      </NavLink>
      <div className="blacklist-details details" >
        <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M11.6974 5.68751L12.2446 6.23463C12.3484 6.33478 12.4072 6.47227 12.4085 6.61626C12.4099 6.76017 12.3528 6.8992 12.2507 7.00076M11.6974 5.68751L12.18 6.93001M11.6974 5.68751L12.2452 5.1397L12.2452 5.13971L12.2464 5.13854C12.4507 4.92746 12.4472 4.59222 12.2404 4.3848L12.2402 4.38457C12.0328 4.1778 11.6975 4.17427 11.4865 4.37863L11.4853 4.37976L10.9375 4.92757M11.6974 5.68751L10.9375 4.92757M12.2507 7.00076C12.2506 7.00082 12.2506 7.00089 12.2505 7.00095L12.18 6.93001M12.2507 7.00076C12.2508 7.00067 12.2509 7.00058 12.251 7.00049L12.18 6.93001M12.2507 7.00076C12.1491 7.10283 12.0101 7.15986 11.8663 7.15852C11.7223 7.15718 11.5848 7.09836 11.4846 6.99459M12.18 6.93001C12.0974 7.01313 11.9842 7.05962 11.8672 7.05853C11.7496 7.05743 11.6375 7.00931 11.556 6.92454M11.4846 6.99459L11.4853 6.99525L11.556 6.92454M11.4846 6.99459C11.4844 6.99434 11.4842 6.99409 11.4839 6.99385L11.556 6.92454M11.4846 6.99459L11.556 6.92454M10.9375 4.92757L10.3897 4.37976L10.3897 4.37975L10.3885 4.37863C10.1774 4.17426 9.84221 4.17782 9.63479 4.38457L9.63456 4.3848C9.42779 4.59222 9.42426 4.92746 9.62861 5.13854L9.6286 5.13855L9.62975 5.1397L10.1776 5.68751L10.9375 4.92757ZM6.08321 5.78713L6.08358 5.7875H6.125C6.84771 5.7875 7.54087 5.50023 8.05183 4.9893L7.98112 4.91859L8.05183 4.9893C8.56276 4.47837 8.85003 3.78519 8.85003 3.06247C8.85003 2.33974 8.56276 1.64659 8.05183 1.13564L7.98112 1.20635L8.05183 1.13564C7.5409 0.624706 6.84772 0.337439 6.125 0.337439C5.40227 0.337439 4.70913 0.624707 4.19817 1.13563L4.19817 1.13564C3.68724 1.64657 3.39997 2.33974 3.39997 3.06247L3.39997 3.06255C3.40054 3.78527 3.68838 4.47782 4.19867 4.9887L4.19875 4.98878C4.69979 5.48925 5.37558 5.77575 6.08321 5.78713ZM4.47503 3.06258C4.47606 2.15407 5.20964 1.41784 6.11715 1.4125H6.125C6.79221 1.4125 7.39395 1.81469 7.64919 2.43084L7.64921 2.43087C7.90495 3.04756 7.76367 3.7576 7.29189 4.22935L7.3626 4.30007L7.29189 4.22936C6.8201 4.70114 6.11009 4.84242 5.49341 4.58668L5.49337 4.58666C4.87725 4.33145 4.47507 3.72976 4.47503 3.06258ZM6.12495 6.52303L6.12487 6.4625C4.82254 6.46417 3.57375 6.98219 2.65273 7.90268L2.65269 7.90273C1.73218 8.82379 1.21421 10.0726 1.2125 11.3749V11.375V13.125C1.2125 13.2673 1.26886 13.4043 1.36976 13.5052L6.12495 6.52303ZM9.96249 12.5875H2.2875V11.375C2.2875 10.0041 3.01876 8.73726 4.20617 8.0519L4.2062 8.05189C5.39368 7.36594 6.85619 7.36594 8.04366 8.05189L8.04369 8.0519C9.23117 8.73731 9.96236 10.0043 9.96236 11.375L9.96249 12.5875ZM11.0082 6.37673L10.9375 6.30602L10.8668 6.37673L10.9375 6.44744L11.0082 6.37673Z" fill="#545F7D" stroke="#545F7D" stroke-width="0.2"/>
</svg></div>
        <div className="">Blacklist User</div>
      </div>
      <div className="active-details details">
        <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <g clip-path="url(#clip0_5530_2525)">
    <path d="M4.98844 6.61042L4.9883 6.61032C4.16917 5.99661 3.6376 5.01997 3.6376 3.91777C3.6376 2.10402 5.07433 0.625678 6.87097 0.557898L6.87143 0.554956H6.99998C8.85641 0.554956 10.3613 2.06095 10.3613 3.91726C10.3613 5.01894 9.82975 5.99541 9.01128 6.60916C9.01126 6.60917 9.01124 6.60919 9.01122 6.60921L8.8311 6.74442L9.04517 6.81481C9.04518 6.81481 9.04519 6.81482 9.0452 6.81482C9.86977 7.08578 10.6377 7.52127 11.3015 8.10107L11.3015 8.10111C11.4683 8.24689 11.4846 8.49091 11.3393 8.65726L11.339 8.65759C11.1928 8.82395 10.9489 8.83881 10.7831 8.69395L10.8818 8.58099L10.7831 8.69395C9.77092 7.80959 8.48183 7.30916 7.13928 7.27625H7.12745L7.12248 7.27643C7.08099 7.27795 7.03809 7.27953 6.99838 7.27953C6.95946 7.27953 6.91838 7.27801 6.87793 7.27652L6.8704 7.27625H6.85909C4.2063 7.34106 1.91033 9.24287 1.36801 11.8468L1.36796 11.8471C1.32757 12.0393 1.37682 12.2406 1.50067 12.3934L1.5188 12.4157C1.60005 12.5064 1.7639 12.6326 2.00101 12.6326H6.51279C6.73367 12.6326 6.9067 12.8061 6.9067 13.027C6.9067 13.2492 6.733 13.4209 6.51279 13.4209H2.00101C1.56642 13.4209 1.16332 13.2288 0.889327 12.892L0.889302 12.892C0.613527 12.5528 0.507874 12.1163 0.597436 11.6872L4.98844 6.61042ZM4.98844 6.61042L5.16885 6.74525M4.98844 6.61042L5.16885 6.74525M7.86128 11.061L7.96602 10.9537L7.96608 10.9537C7.9661 10.9538 7.96613 10.9538 7.96615 10.9538L9.59842 12.5462L9.60673 12.5543L9.60695 12.5546C9.71302 12.6487 9.83815 12.6606 9.90482 12.6559L9.90539 12.6559C9.97132 12.6515 10.0909 12.6244 10.1837 12.5199L12.7175 8.98412L12.7176 8.98398C12.781 8.89585 12.8717 8.84017 12.9732 8.82387L13.0491 8.81167L13.0571 8.81973L9.94875 13.4437L9.95862 13.443C10.2896 13.4212 10.6004 13.2595 10.8092 13.0015L10.8046 13.0062L10.8029 13.0078L10.8019 13.0068M7.86128 11.061C7.76284 10.9648 7.613 10.967 7.51621 11.066C7.41996 11.1644 7.4216 11.3137 7.52003 11.4105L9.15523 13.0062C9.34992 13.1916 9.61133 13.295 9.8793 13.295C9.9061 13.295 9.92852 13.295 9.94711 13.2933M7.86128 11.061L9.49368 12.6535M7.86128 11.061L9.49368 12.6535M9.94711 13.2933V13.4433H9.94875V13.4436C9.95207 13.4434 9.95536 13.4432 9.95861 13.4429C9.95918 13.4428 9.95974 13.4428 9.9603 13.4427L9.95359 13.3667L9.94875 13.3119L9.94711 13.2933ZM9.94711 13.2933H9.94875C10.1958 13.277 10.4305 13.1713 10.6075 13.0001C10.6241 13.0151 10.6423 13.0284 10.6566 13.035C10.6809 13.041 10.7225 13.0417 10.7389 13.0388C10.7494 13.0359 10.7664 13.0294 10.773 13.0262C10.7855 13.0198 10.7941 13.0131 10.7972 13.0107C10.7989 13.0093 10.8005 13.008 10.8019 13.0068M10.8019 13.0068C10.8025 13.0063 10.8031 13.0057 10.8037 13.0053C10.8046 13.0044 10.8054 13.0037 10.806 13.0031C10.8084 13.0009 10.8104 12.9989 10.8118 12.9975C10.8124 12.9969 10.8128 12.9964 10.8132 12.9961L10.8146 12.9945L10.8152 12.9939L10.8159 12.9931L10.8169 12.9918L10.7443 12.9373L10.71 12.9116L10.6969 12.9018L10.7105 12.9154L10.7147 12.9196L10.8019 13.0068ZM9.49368 12.6535L9.49532 12.6557C9.64407 12.7957 9.8218 12.8121 9.91532 12.8056C10.0061 12.7996 10.1729 12.7624 10.3014 12.6131L9.49368 12.6535ZM5.16885 6.74525L4.95422 6.81591C4.95422 6.81591 4.95422 6.81591 4.95422 6.81591C4.19092 7.06717 3.47392 7.45838 2.84687 7.97401C1.69729 8.91932 0.899155 10.2389 0.59745 11.6872L5.16885 6.74525ZM4.42376 4.03523V3.91725C4.42376 2.50179 5.5796 1.34523 6.99471 1.34327L6.99471 1.34329H6.99881C8.41557 1.34329 9.57335 2.5001 9.57335 3.91727C9.57335 5.2906 8.48741 6.4205 7.12966 6.48821L7.12964 6.48794L7.12056 6.48895L7.11906 6.48911C7.07768 6.48803 7.03776 6.48748 6.99932 6.48748C6.97359 6.48748 6.94583 6.48798 6.91902 6.48847C6.90572 6.48871 6.89265 6.48895 6.88018 6.48912H6.87965L6.87807 6.48895L6.8781 6.48867L6.86894 6.48821C5.60286 6.42537 4.60496 5.42448 4.47602 4.16989L4.46218 4.03523H4.42376Z" fill="#545F7D" stroke="#545F7D" stroke-width="0.3"/>
  </g>
  <defs>
    <clipPath id="clip0_5530_2525">
      <rect width="14" height="14" fill="white"/>
    </clipPath>
  </defs>
</svg></div>
        <div className="">Activate User</div>
      </div>
     
    </div>
  )
}
   
        return(
  <tr className='borer-tr' key={user.id}>
      <td>{user.organization}</td>
      <td >{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{date}</td>
      <td  className='stat'><div className="status-div" style={style}>{user.status}</div></td>
      <td className='svg-table'><div className="svg-table-svg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_5530_2389)">
    <path d="M10.0002 6.1111C10.9224 6.1111 11.6668 5.36666 11.6668 4.44444C11.6668 3.52222 10.9224 2.77777 10.0002 2.77777C9.07794 2.77777 8.3335 3.52222 8.3335 4.44444C8.3335 5.36666 9.07794 6.1111 10.0002 6.1111ZM10.0002 8.33333C9.07794 8.33333 8.3335 9.07777 8.3335 9.99999C8.3335 10.9222 9.07794 11.6667 10.0002 11.6667C10.9224 11.6667 11.6668 10.9222 11.6668 9.99999C11.6668 9.07777 10.9224 8.33333 10.0002 8.33333ZM10.0002 13.8889C9.07794 13.8889 8.3335 14.6333 8.3335 15.5555C8.3335 16.4778 9.07794 17.2222 10.0002 17.2222C10.9224 17.2222 11.6668 16.4778 11.6668 15.5555C11.6668 14.6333 10.9224 13.8889 10.0002 13.8889Z" fill="#545F7D"/>
  </g>
  <defs>
    <clipPath id="clip0_5530_2389">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg></div>
<div className="details-container"><Details mainUsers={user.id}/></div>
</td>
  </tr>)
        
      })
    
    return(
         <div className="">
  
          <div className="the-table">
          <table>
              <tr className='table-header-pro'>
                  <th className='org'>
                <div className="t-con">
                <div className="th-icon">organization</div>
                      <div className="th"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z" fill="#545F7D"/>
  </svg></div>
                </div>
                  </th>
                  <th className='name'>
                  <div className="t-con">    <div className="th-icon">Username</div>
                      <div className="th"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z" fill="#545F7D"/>
  </svg></div></div>
                  </th>
                  <th className='email'>
                <div className="t-con">      <div className="th-icon">Email</div>
                      <div className="th"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z" fill="#545F7D"/>
  </svg></div></div>
                  </th>
                  <th className='number'>
                 <div className="t-con">
                 <div className="th-icon">Phone-number</div>
                      <div className="th"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z" fill="#545F7D"/>
  </svg></div>
                 </div>
                  </th>
                  <th className='date'>
                   <div className="t-con">
                   <div className="th-icon">Date-joined</div>
                      <div className="th"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z" fill="#545F7D"/>
  </svg></div>
                   </div>
                  </th>
                  <th className='status-header'>
                 <div className="t-con">     <div className="th-icon">Status</div>
                      <div className="th"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z" fill="#545F7D"/>
  </svg></div></div>
                  </th>
              </tr>
              {Newtable}
            
          </table>
          </div>
         </div>
      )
  }
  return (
    <div className='user-main-container'>
        <div className="user-header">
            Users
        </div>
        <div className="card-container">
            <Card backgroundColor={'rgba(255, 51, 102, 0.1)'}   name='USERS' amount={500}  svg={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <g clip-path="url(#clip0_5530_2782)">
    <path d="M10.7809 13.9717L10.8295 14.0592C10.8282 14.0598 10.827 14.0605 10.8257 14.0611L10.7809 13.9717ZM10.7809 13.9717C10.8108 13.9567 10.8408 13.942 10.8707 13.9274L10.8683 13.9231L10.7809 13.9717ZM19.2882 13.4376L19.2877 13.4374C18.6974 13.1973 18.2366 13.0011 17.9162 12.7334C17.6117 12.4789 17.4326 12.1579 17.4084 11.6562C17.6451 11.3531 17.7986 10.9771 17.8978 10.6431C17.9958 10.3135 18.0427 10.0182 18.0633 9.86117C18.4558 9.2465 18.6135 8.6202 18.5473 8.18821C18.8775 7.39117 18.6457 6.74349 18.4261 6.23023C18.2437 5.79194 18.1121 5.42115 18.2809 4.94649L18.3906 4.65426L18.421 4.57334L18.3453 4.53157L18.0153 4.34938L18.0154 4.34919L18.0094 4.34639C16.8165 3.78708 15.4665 3.70846 14.4811 4.12481L14.4811 4.12474L14.4774 4.12644C13.8423 4.42519 13.3485 4.91218 13.1145 5.58762C12.7367 5.90253 12.5609 6.36163 12.5005 6.82113C12.4402 7.27953 12.4932 7.7492 12.5839 8.105C12.478 8.5783 12.6742 9.21148 13.0676 9.826C13.0882 9.98263 13.1351 10.2779 13.2331 10.6076C13.3321 10.9411 13.4853 11.3166 13.7213 11.6195C13.6803 12.1225 13.5005 12.4442 13.2003 12.6986C12.8846 12.9661 12.433 13.1623 11.8432 13.4021L11.8273 13.4085C11.4663 13.5531 11.1018 13.699 10.7361 13.8823L10.6428 13.9291L10.6935 14.0203L11.0604 14.6803L11.109 14.7676L11.1964 14.7192C11.4106 14.6004 11.6199 14.5151 11.8355 14.4273C11.9469 14.3819 12.06 14.3358 12.1762 14.2841C12.7413 14.0654 13.3623 13.8217 13.8399 13.4056C14.3245 12.9835 14.6578 12.3878 14.6578 11.4787V11.3317V11.2903L14.6286 11.261L14.5186 11.151C14.3348 10.9672 14.2032 10.6748 14.1177 10.3824C14.0326 10.0915 13.9978 9.81684 13.9978 9.68174V9.57173V9.54788L13.9871 9.52659L13.9501 9.45355L13.9508 9.45322L13.9441 9.44322C13.729 9.12054 13.6145 8.85478 13.5581 8.65967C13.5299 8.56202 13.5164 8.48287 13.5119 8.4237C13.5077 8.3698 13.5115 8.33824 13.5144 8.32518L13.5835 8.18625L13.5999 8.15317L13.5909 8.11735L13.554 7.97039L13.5542 7.97033L13.5519 7.9632C13.4649 7.70201 13.4206 7.3406 13.4558 7.00622C13.4913 6.66817 13.6048 6.38458 13.8062 6.24447L13.9153 6.172L13.9476 6.1506L13.957 6.11308L13.9936 5.96773C14.1331 5.48177 14.4069 5.14055 14.8894 4.93365L14.8895 4.93371L14.8928 4.93212C15.5387 4.62633 16.4281 4.64712 17.2688 4.97766C17.1823 5.59108 17.3669 6.06781 17.5437 6.4909C17.5559 6.52513 17.568 6.55866 17.5799 6.59158C17.7489 7.05943 17.8734 7.40387 17.6218 7.87462L17.6213 7.87432L17.6172 7.88468L17.5441 8.06773L17.5275 8.10926L17.5474 8.14931L17.6185 8.29222C17.6188 8.29411 17.6196 8.29839 17.6202 8.30577C17.6214 8.32076 17.6216 8.34271 17.6196 8.37184C17.6155 8.42988 17.603 8.51079 17.5767 8.6114C17.5245 8.81183 17.4188 9.08629 17.223 9.40748L17.1505 9.51365L17.1331 9.53916V9.57003V9.67374C17.1144 9.82135 17.0783 10.0957 16.999 10.3821C16.9178 10.6755 16.7951 10.9666 16.6124 11.1493L16.5024 11.2593L16.4731 11.2886V11.33V11.477C16.4731 12.3861 16.8065 12.9818 17.291 13.4039C17.7693 13.8206 18.3913 14.0644 18.957 14.2833C19.5285 14.5045 20.0441 14.71 20.4373 15.0368C20.8038 15.3416 21.0671 15.7552 21.1538 16.4H14.667H14.567V16.5V17.2331V17.3331H14.667H22H22.1V17.2331V16.8661C22.1 15.7212 21.7041 14.9794 21.1466 14.4649C20.595 13.9558 19.8906 13.675 19.2882 13.4376Z" fill="#DF18FF" stroke="#DF18FF" stroke-width="0.2"/>
    <path d="M7.22392 4.52085C6.14637 4.52085 5.53815 5.03195 5.22969 5.33764C4.2622 5.58717 3.75817 6.12827 3.49683 6.77942C3.24049 7.41807 3.21981 8.1586 3.20167 8.80797L3.20094 8.83421C3.20094 8.83435 3.20093 8.83448 3.20093 8.83462C3.18236 9.35064 3.16407 9.83441 3.06168 10.2485C2.96036 10.6584 2.77923 10.9889 2.4423 11.209L2.11541 11.3904L2.02052 11.443L2.08071 11.5333L2.3007 11.8633C2.81691 12.638 3.96456 13.3622 5.15284 13.7086C4.74433 14.862 3.75589 15.2426 2.68054 15.6366C2.04187 15.855 1.34551 16.0982 0.811165 16.5472C0.269578 17.0023 -0.1 17.6633 -0.1 18.7V19.0669V19.1669H0H13.933H14.033V19.0669V18.7C14.033 17.6633 13.6635 17.0025 13.127 16.5474C12.5974 16.0982 11.9104 15.8547 11.2908 15.6359C11.2748 15.63 11.2589 15.6242 11.243 15.6183C10.1834 15.2304 9.21975 14.8775 8.81722 13.708C10.0058 13.3617 11.153 12.6373 11.6701 11.8624L11.6702 11.8624L11.8902 11.5324L11.9504 11.4421L11.8555 11.3895L11.528 11.2078C11.2099 11.0059 11.0004 10.6481 10.8478 10.1812C10.695 9.71363 10.6045 9.15366 10.5127 8.56543L10.5126 8.56442C10.5081 8.53789 10.5037 8.51124 10.4993 8.48447C10.3571 7.62867 10.1955 6.65602 9.75846 5.89124C9.53166 5.49434 9.22924 5.15024 8.81487 4.90596C8.40045 4.66164 7.88033 4.52085 7.22392 4.52085ZM13.0804 18.233H0.885611C0.972968 17.723 1.21322 17.4009 1.55226 17.1586C1.89855 16.9112 2.34679 16.7471 2.85636 16.5606C2.8931 16.5472 2.93015 16.5336 2.96751 16.5199L2.96788 16.5198C2.98244 16.5144 2.99702 16.509 3.01163 16.5035C3.63804 16.2708 4.31282 16.0201 4.88621 15.5843C5.47744 15.135 5.95844 14.4914 6.1837 13.4777L6.18372 13.4778L6.18415 13.4756L6.2572 13.1086L6.27672 13.0105L6.17865 12.991L5.81169 12.918L5.81169 12.918L5.81035 12.9177C4.87991 12.7457 3.88295 12.2081 3.33135 11.6619C3.6876 11.3065 3.87773 10.8643 3.9834 10.3976C4.09456 9.90659 4.1137 9.38085 4.13149 8.89253L4.1321 8.87577H4.13211L4.13214 8.87459C4.1507 8.11934 4.1882 7.52532 4.38069 7.08331C4.47559 6.86541 4.60774 6.68607 4.79419 6.54352C4.98132 6.40045 5.22786 6.29085 5.55633 6.21987L5.55646 6.22048L5.56705 6.21692L5.67705 6.17997L5.69931 6.17249L5.71592 6.15589L5.78896 6.08284L5.78946 6.08234C6.04114 5.83066 6.41967 5.45213 7.22129 5.45213C7.65914 5.45213 7.99995 5.52809 8.27152 5.66846C8.54227 5.8084 8.75076 6.01572 8.91924 6.2893C9.26016 6.84286 9.43195 7.65661 9.6157 8.70562C9.70696 9.27246 9.79964 9.84743 9.95778 10.3681C10.106 10.8563 10.3138 11.3042 10.6385 11.6585C10.0876 12.2059 9.0885 12.7445 8.15606 12.9177L8.15481 12.918L7.78785 12.991L7.68977 13.0105L7.7093 13.1086L7.78234 13.4756L7.78243 13.476C7.98903 14.491 8.47062 15.1351 9.06674 15.5845C9.63655 16.0141 10.3094 16.2639 10.9286 16.4938C10.952 16.5025 10.9754 16.5111 10.9986 16.5198L10.9991 16.5199L11.0071 16.5229C11.5578 16.7247 12.0443 16.9029 12.4139 17.1714C12.7533 17.4178 12.993 17.74 13.0804 18.233Z" fill="#DF18FF" stroke="#DF18FF" stroke-width="0.2"/>
  </g>
  <defs>
    <clipPath id="clip0_5530_2782">
      <rect width="22" height="22" fill="white"/>
    </clipPath>
  </defs>
</svg>}/>
            <Card backgroundColor={'rgba(87, 24, 255, 0.1)'}  name='Active USERS' amount={400} svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5.40876 20.7755L5.40878 20.7753C5.2427 20.7637 5.10507 20.6935 5.01017 20.5773C4.93547 20.4858 4.89111 20.3707 4.87616 20.243H4.86763V20.143C4.86763 18.8381 5.2137 17.6162 5.81335 16.5614H2.43539C2.26471 16.5614 2.11848 16.4984 2.01507 16.3838C1.91284 16.2704 1.85955 16.1146 1.85635 15.9395M5.40876 20.7755L1.95632 15.9373M5.40876 20.7755L5.41574 20.7755L18.5545 20.7784C18.8752 20.7784 19.1335 20.5188 19.1335 20.1993C19.1335 18.9325 18.7596 17.6106 18.1652 16.5615L21.5639 16.5606C21.8846 16.5606 22.143 16.301 22.143 15.9815L22.143 15.9803C22.1124 13.5787 20.7611 11.5478 18.642 10.6785C19.786 9.95121 20.5184 8.67431 20.5184 7.25897C20.5184 3.79604 16.468 1.96133 13.9041 4.20528C12.6926 3.70612 11.3069 3.70612 10.0954 4.20528C9.3769 3.57685 8.45379 3.22247 7.48189 3.22247C3.45243 3.22247 1.99524 8.57355 5.35675 10.6801M5.40876 20.7755L5.58344 10.6986C5.54585 10.6774 5.50882 10.6558 5.47235 10.6337C5.43362 10.6487 5.39508 10.6642 5.35675 10.6801M1.85635 15.9395C1.85634 15.9394 1.85634 15.9393 1.85634 15.9391L1.95632 15.9373M1.85635 15.9395C1.85635 15.9396 1.85635 15.9397 1.85635 15.9398L1.95632 15.9373M1.85635 15.9395C1.80084 13.6744 3.27898 11.5403 5.35675 10.6801M1.95632 15.9373C1.90113 13.691 3.38568 11.5712 5.46325 10.7447C5.42723 10.7235 5.39173 10.702 5.35675 10.6801M5.98763 16.4614H5.87125L5.92864 16.5614C5.94804 16.5279 5.96771 16.4946 5.98763 16.4614ZM18.5289 5.2208L18.529 5.22083C20.2108 6.91955 19.1948 9.83041 16.877 10.118C17.3723 8.11422 16.6089 6.03533 14.9941 4.82705C16.1109 4.10957 17.5822 4.26358 18.5289 5.2208ZM7.12476 10.1177C5.71237 9.93785 4.64026 8.71877 4.64026 7.2608C4.64026 4.96075 7.14996 3.62645 9.00796 4.82696C7.39303 6.03507 6.62969 8.11381 7.12476 10.1177ZM15.4988 10.5398C14.1179 13.541 9.88195 13.5437 8.50112 10.5399C7.27847 7.87711 9.24229 4.98947 11.989 4.98904C14.9024 5.02526 16.6822 7.96716 15.4988 10.5398ZM3.0459 15.4043C3.31215 13.0953 5.28099 11.3435 7.6465 11.4198C8.11463 12.2353 8.80133 12.9107 9.63053 13.3566C8.46485 13.7713 7.43557 14.482 6.63465 15.4042L3.0459 15.4043ZM17.3445 15.4042C16.5465 14.4875 15.5226 13.7755 14.3622 13.3621C15.1946 12.9141 15.8858 12.2383 16.356 11.4198C18.7215 11.3434 20.6905 13.0943 20.9566 15.4042H17.3445ZM6.04793 19.6202C6.16912 18.1942 6.80652 16.8488 7.77177 15.8727C11.381 12.2248 17.5119 14.5852 17.9316 19.6202H6.04793Z" fill="#5718FF" stroke="#5718FF" stroke-width="0.2"/>
  <path d="M13.2471 9.79774L13.2395 9.81237C12.7073 10.8176 11.2757 10.8107 10.7509 9.79791C10.6665 9.6342 10.5368 9.53764 10.3924 9.50168C10.2506 9.46634 10.1019 9.49121 9.97735 9.55535C9.8528 9.61949 9.7462 9.72605 9.69256 9.86213C9.63799 10.0006 9.64128 10.1624 9.72562 10.3264L9.72568 10.3266C10.6816 12.179 13.32 12.1791 14.275 10.3265C14.3596 10.1625 14.3631 10.0006 14.3085 9.86202C14.2548 9.72582 14.1481 9.61917 14.0233 9.55498C13.8985 9.49079 13.7495 9.46592 13.6073 9.50127C13.4625 9.53724 13.3322 9.63383 13.2471 9.79774ZM14.1861 10.2807C13.2683 12.061 10.7333 12.061 9.81455 10.2807L13.4019 9.74383C13.7353 9.3458 14.4544 9.7607 14.1861 10.2807Z" fill="#5718FF" stroke="#5718FF" stroke-width="0.2"/>
</svg>}/>
            <Card  backgroundColor={'rgba(245, 95, 68, 0.1)'} name='USERS WITH LOANS'amount={12500} svg={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M1.96167 0.400011V16.4118H8.31567V15.2118H3.16167V1.60001H9.19987V5.95781H13.3155V9.65381H14.5155V4.92561L10.0881 0.399811L1.96167 0.400011ZM10.3999 2.43601L12.6741 4.75781H10.3999V2.43601Z" fill="#F55F44"/>
  <path d="M4.3938 8.35242H11.604V9.55242H4.3938V8.35242Z" fill="#F55F44"/>
  <path d="M4.3938 10.9524H8.004V12.1524H4.3938V10.9524Z" fill="#F55F44"/>
  <path d="M18.0381 17.9422V12.4C18.0381 10.7719 14.1921 10.7258 13.7537 10.7258C13.3154 10.7258 9.47168 10.7758 9.47168 12.4V17.9796C9.47246 18.0406 9.48262 18.1007 9.50215 18.1577C9.84355 19.5601 13.3381 19.5999 13.7561 19.5999C14.1741 19.5999 17.9561 19.5523 18.0357 17.9741C18.0357 17.9656 18.0381 17.9562 18.0381 17.9421L18.0381 17.9422ZM16.8381 14.1422C16.5998 14.3618 15.4998 14.7203 13.7561 14.7203C12.0115 14.7203 10.9201 14.3617 10.6717 14.15V13.6344C11.8396 14.0602 13.4717 14.0782 13.7561 14.0782C14.0405 14.0782 15.6717 14.0578 16.8405 13.6344L16.8381 14.1422ZM10.6717 15.4758C11.8396 15.9016 13.4717 15.9196 13.7561 15.9196C14.0405 15.9196 15.6717 15.8993 16.8405 15.4758L16.8397 16C16.592 16.2118 15.4999 16.5704 13.7553 16.5704C12.0115 16.5704 10.9201 16.2 10.6717 16L10.6717 15.4758ZM13.7561 11.9298C15.2561 11.9298 16.2741 12.1954 16.6881 12.404C16.274 12.604 15.256 12.8783 13.7561 12.8783C12.2561 12.8783 11.2357 12.6142 10.8241 12.4001C11.2358 12.2001 12.2538 11.9298 13.7561 11.9298ZM10.6717 17.8344V17.318C11.8396 17.7438 13.4717 17.7618 13.7561 17.7618C14.0405 17.7618 15.6717 17.7415 16.8405 17.318V17.8336C16.5897 18.0461 15.4999 18.4 13.7561 18.4C12.0115 18.4 10.9201 18.0461 10.6717 17.8344Z" fill="#F55F44"/>
</svg>} />
            <Card backgroundColor={'rgba(255, 51, 102, 0.1)'} name='USERS WITH SAVINGS' amount={102452} svg={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_5530_2742)">
    <path d="M16.6002 2.25C16.6002 1.52193 16.0002 0.934328 15.1059 0.534069C14.2049 0.130866 12.9713 -0.1 11.6248 -0.1C10.2786 -0.1 9.04511 0.130867 8.14429 0.534071C7.25004 0.93433 6.65 1.52193 6.65 2.25C6.65 2.97807 7.25004 3.56567 8.14429 3.96593C9.04511 4.36913 10.2786 4.6 11.6248 4.6C12.9713 4.6 14.2049 4.36913 15.1059 3.96593C16.0002 3.56567 16.6002 2.97807 16.6002 2.25ZM7.60024 2.25C7.60024 2.10802 7.68874 1.94724 7.88614 1.78025C8.08165 1.61485 8.37054 1.45542 8.7363 1.31648C9.46698 1.03894 10.4858 0.85024 11.6248 0.85024C12.7637 0.85024 13.7827 1.03894 14.5136 1.31649C14.8794 1.45543 15.1684 1.61487 15.364 1.78027C15.5615 1.94727 15.65 2.10804 15.65 2.25C15.65 2.39196 15.5615 2.55273 15.364 2.71974C15.1684 2.88513 14.8794 3.04457 14.5136 3.18351C13.7827 3.46106 12.7637 3.64976 11.6248 3.64976C10.4858 3.64976 9.46698 3.46106 8.7363 3.18351C8.37054 3.04457 8.08165 2.88514 7.88614 2.71975C7.68874 2.55275 7.60024 2.39198 7.60024 2.25Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M16.6002 2.25V2.15H16.5002H15.75H15.65V2.25V4.5C15.65 4.64197 15.5615 4.80274 15.364 4.96974C15.1684 5.13514 14.8794 5.29458 14.5136 5.43352C13.7827 5.71106 12.7637 5.89976 11.6248 5.89976C10.4858 5.89976 9.46698 5.71106 8.7363 5.43351C8.37054 5.29457 8.08165 5.13514 7.88614 4.96975C7.68874 4.80275 7.60024 4.64198 7.60024 4.5V2.25V2.15H7.50024H6.75H6.65V2.25V4.5C6.65 5.22807 7.25004 5.81567 8.14429 6.21593C9.04511 6.61913 10.2786 6.85 11.6248 6.85C12.9713 6.85 14.2049 6.61913 15.1059 6.21593C16.0002 5.81567 16.6002 5.22807 16.6002 4.5V2.25Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M6.65 6.75702V6.83833L6.7296 6.85491L6.72961 6.85491L6.73796 6.85665L6.74649 6.85695C7.00336 6.866 7.2532 6.8848 7.49323 6.91193L7.62051 6.92632L7.60358 6.79935C7.60133 6.78244 7.60024 6.76647 7.60024 6.74998V4.49998V4.39998H7.50024H6.75H6.65V4.49998V6.74998V6.75702ZM10.5015 8.94541L10.5045 9.04459C10.8651 9.08079 11.2404 9.09994 11.6248 9.09994C12.9713 9.09994 14.2049 8.86907 15.1059 8.46587C16.0002 8.06561 16.6002 7.47801 16.6002 6.74994V4.49994V4.39994H16.5002H15.75H15.65V4.49994V6.74994C15.65 6.89191 15.5615 7.05268 15.364 7.21968C15.1684 7.38508 14.8794 7.54452 14.5136 7.68345C13.7827 7.961 12.7637 8.1497 11.6248 8.1497C11.2361 8.1497 10.8616 8.12811 10.5068 8.08776L10.3795 8.07328L10.3964 8.20034C10.3987 8.21716 10.3998 8.23384 10.3998 8.2497C10.3998 8.31385 10.4054 8.56946 10.4146 8.9475L10.5015 8.94541Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M10.4708 11.1525L10.3094 11.2763L10.5626 11.3004C10.9055 11.3331 11.2609 11.3501 11.6247 11.3501C12.9712 11.3501 14.2049 11.1192 15.1058 10.716C16.0001 10.3158 16.6002 9.72816 16.6002 9.00009V6.75009V6.65009H16.5002H15.7499H15.6499V6.75009V9.00009C15.6499 9.14206 15.5614 9.30283 15.3639 9.46984C15.1684 9.63523 14.8794 9.79467 14.5135 9.93361C13.7827 10.2112 12.7637 10.3999 11.6247 10.3999C11.257 10.3999 10.9005 10.3803 10.5631 10.3442L10.4495 10.332L10.4525 10.4462C10.4544 10.5218 10.4564 10.5983 10.4584 10.6757C10.4624 10.8316 10.4665 10.9909 10.4708 11.1525ZM7.48926 6.91133L7.60024 6.92359V6.81194V6.75006V6.65006H7.50024H6.75H6.65V6.75006V6.75709V6.85361L6.74646 6.85703C7.0019 6.86608 7.24972 6.88487 7.48926 6.91133Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M11.35 9C11.35 8.27193 10.75 7.68433 9.85571 7.28407C8.95489 6.88087 7.72142 6.65 6.37524 6.65C5.02869 6.65 3.79505 6.88087 2.89414 7.28407C1.9998 7.68433 1.39976 8.27193 1.39976 9C1.39976 9.72807 1.9998 10.3157 2.89414 10.7159C3.79505 11.1191 5.02869 11.35 6.37524 11.35C7.72142 11.35 8.95489 11.1191 9.85571 10.7159C10.75 10.3157 11.35 9.72807 11.35 9ZM2.35 9C2.35 8.85803 2.43852 8.69726 2.636 8.53026C2.83158 8.36486 3.12055 8.20542 3.48641 8.06648C4.21728 7.78894 5.23625 7.60024 6.37524 7.60024C7.51422 7.60024 8.53301 7.78894 9.26369 8.06649C9.62946 8.20543 9.91834 8.36486 10.1139 8.53025C10.3113 8.69725 10.3998 8.85802 10.3998 9C10.3998 9.14198 10.3113 9.30275 10.1139 9.46975C9.91834 9.63514 9.62946 9.79457 9.26369 9.93351C8.53301 10.2111 7.51422 10.3998 6.37524 10.3998C5.23625 10.3998 4.21728 10.2111 3.48641 9.93351C3.12055 9.79457 2.83158 9.63513 2.636 9.46974C2.43852 9.30273 2.35 9.14196 2.35 9Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M11.35 9V8.9H11.25H10.4998H10.3998V9V11.25C10.3998 11.392 10.3113 11.5528 10.1139 11.7198C9.91834 11.8851 9.62946 12.0446 9.26369 12.1835C8.53301 12.4611 7.51422 12.6498 6.37524 12.6498C5.23625 12.6498 4.21728 12.4611 3.48641 12.1835C3.12055 12.0446 2.83158 11.8851 2.636 11.7197C2.43852 11.5527 2.35 11.392 2.35 11.25V9V8.9H2.25H1.49976H1.39976V9V11.25C1.39976 11.9781 1.9998 12.5657 2.89414 12.9659C3.79505 13.3691 5.02869 13.6 6.37524 13.6C7.72142 13.6 8.95489 13.3691 9.85571 12.9659C10.75 12.5657 11.35 11.9781 11.35 11.25V9Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M11.35 11.25V11.15H11.25H10.4998H10.3998V11.25V13.5C10.3998 13.642 10.3113 13.8028 10.1139 13.9698C9.91834 14.1351 9.62946 14.2946 9.26369 14.4335C8.53301 14.7111 7.51422 14.8998 6.37524 14.8998C5.23625 14.8998 4.21728 14.7111 3.48641 14.4335C3.12055 14.2946 2.83158 14.1351 2.636 13.9697C2.43852 13.8027 2.35 13.642 2.35 13.5V11.25V11.15H2.25H1.49976H1.39976V11.25V13.5C1.39976 14.2281 1.9998 14.8157 2.89414 15.2159C3.79505 15.6191 5.02869 15.85 6.37524 15.85C7.72142 15.85 8.95489 15.6191 9.85571 15.2159C10.75 14.8157 11.35 14.2281 11.35 13.5V11.25Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M11.35 13.5V13.4H11.25H10.4998H10.3998V13.5V15.75C10.3998 15.892 10.3113 16.0528 10.1139 16.2198C9.91834 16.3851 9.62946 16.5446 9.26369 16.6835C8.53301 16.9611 7.51422 17.1498 6.37524 17.1498C5.23625 17.1498 4.21728 16.9611 3.48641 16.6835C3.12055 16.5446 2.83158 16.3851 2.636 16.2197C2.43852 16.0527 2.35 15.892 2.35 15.75V13.5V13.4H2.25H1.49976H1.39976V13.5V15.75C1.39976 16.4781 1.9998 17.0657 2.89414 17.4659C3.79505 17.8691 5.02869 18.1 6.37524 18.1C7.72142 18.1 8.95489 17.8691 9.85571 17.4659C10.75 17.0657 11.35 16.4781 11.35 15.75V13.5Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M10.5395 13.4945L10.5626 13.5506L10.6231 13.556C10.9475 13.5851 11.2823 13.6 11.6248 13.6C12.9713 13.6 14.205 13.3692 15.1059 12.966C16.0002 12.5657 16.6003 11.9781 16.6003 11.25V9.00003V8.90003H16.5003H15.7501H15.6501V9.00003V11.25C15.6501 11.392 15.5615 11.5528 15.364 11.7198C15.1685 11.8852 14.8795 12.0446 14.5136 12.1835C13.7828 12.4611 12.7638 12.6498 11.6248 12.6498C11.278 12.6498 10.9424 12.6324 10.6223 12.6004L10.5096 12.5891L10.5123 12.7023C10.5165 12.8717 10.5209 13.0392 10.5253 13.203C10.5276 13.2894 10.5298 13.3748 10.532 13.459L10.5325 13.4774L10.5395 13.4945L10.5395 13.4945Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
    <path d="M10.5989 15.7459L10.6207 15.8065L10.6849 15.8117C10.9891 15.8365 11.3041 15.85 11.6246 15.85C12.9712 15.85 14.2048 15.6191 15.1057 15.2159C16.0001 14.8157 16.6001 14.2281 16.6001 13.5V11.25V11.15H16.5001H15.7499H15.6499V11.25V13.5C15.6499 13.642 15.5614 13.8027 15.3639 13.9697C15.1683 14.1351 14.8793 14.2946 14.5135 14.4335C13.7826 14.7111 12.7636 14.8998 11.6246 14.8998C11.2994 14.8998 10.984 14.8844 10.682 14.8559L10.5696 14.8453L10.5726 14.9582C10.5778 15.1476 10.5821 15.3097 10.5855 15.4372C10.5891 15.5703 10.5916 15.6657 10.593 15.7149L10.5935 15.7309L10.5989 15.7459L10.5989 15.7459Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
  </g>
  <defs>
    <clipPath id="clip0_5530_2742">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>}/>
        </div>
        <div className="table-container">
            <Table/>
        </div>
        <div className="pagination-container">
        <div className="count">
         showing
        <div className="out-con">
         <div className="counting">{page* itemsPerPage}</div>
         <div className="s"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <g opacity="0.6">
    <path d="M11.0573 3.99378C11.8984 3.15269 13.1595 4.45644 12.3184 5.25487L7.56759 10.0056C7.23127 10.3841 6.64282 10.3841 6.3065 10.0056L1.64002 5.38129C0.841037 4.5402 2.10267 3.27906 2.94322 4.1202L6.937 8.11398L11.0573 3.99378Z" fill="#213F7D"/>
  </g>
</svg></div>
        </div>
<div className="out">out of</div>
<div className="page-amount">{500}</div>
        </div>
      <div className="pagii">{<PaginationControlled/>}</div>
        </div>
</div>
  )

}
