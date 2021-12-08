const Hamburger = ({ hamburgerOpen }) => {

  return (
    <>
    <div className="hamburger">
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </div>

    <style jsx="true">{`
      .hamburger {
        display: none;
      }
    
      .burger {
        width: 3rem;
        height: 0.4rem;
        border-radius: 10px;
        background-color: white;
        margin: 0.3rem;
        transform-origin: 1px;
        transition: all 0.3s linear;
      }
      .burger1 {
        transform: ${ hamburgerOpen? 'rotate(45deg)' : 'rotate(0)'};
      }
      .burger2 {
        transform: ${ hamburgerOpen? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${hamburgerOpen? 0 : 1};
      }
      .burger3 {
        transform: ${hamburgerOpen? 'rotate(-45deg)' : 'rotate(0)'}
      }
      
      @media (max-width: 767px) {
        .hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding-top: 10px;
          margin: 2rem 0 0 0;
          z-index: 10;
        }
      }
  `}</style>
    </>
  )
}


export default Hamburger;