import React from 'react';

type NameIdProps = {
    name: string;
    id: string;
}

const NameId: React.FC<NameIdProps> = ({ name, id }) => {
    return (
        <div
            className='bg-stone-200 flex py-4 my-10 w-3/4 md:w-1/3'
            style={{
                borderRadius: "20px",
                justifyContent: "start",
                height: "80px",
                margin: "10px", 
            }}
        >
            <img
                src='./sample/Himawari.jpg'
                width="50px"
                className='ml-4'
                style={{
                    borderRadius: "50%",
                    objectFit: "cover", 
                    height: "50px", 
                }}
                alt="Profile"
            />
            <div className='ml-4'>
                <p style={{ fontWeight: "bold", color: "#000000" }}>{name}</p>
                <p style={{ color: "#585858" }}>ID: {id}</p>
            </div>
        </div>
    );
}

export default NameId;
