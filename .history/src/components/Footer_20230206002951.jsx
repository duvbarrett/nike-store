import {useEffect, useState} from 'react'

const Footer = () => {
  const Footer = ({ footerAPI: { titles, links } }) => {
  const [Year, setYear] = useState();
  useEffect(() => {
      const getYear = () => setYear(new Date().getFullYear());
      getYear();
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Footer
