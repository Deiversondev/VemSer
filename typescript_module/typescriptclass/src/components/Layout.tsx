import { prependOnceListener } from 'process';
import React from 'react'

interface IProps {
    person: {
      name:string,
      url:string,
      age:number,
      note?:string
    }[]
  }

const Layout: React.FC<IProps> = ({person}) => {
    return (
        <div>
            <p>T e s t i n g</p>
            {person.map(
                p => (
                    <div>
                        <p>{p.name}</p>
                        <img src={p.url} alt="" />
                        <p>{p.age}</p>
                        <p>{p.note}</p>
                        <hr />
                    </div>
                )
            )}
        </div>
    )
}

export default Layout;
