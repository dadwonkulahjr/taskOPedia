import logo from '../images/react.png';

const Header = () => 
{
    return (
        <MainHeader/>
    );
}

function MainHeader(){
    return (
        <div>
            <Heading/>
            <SubHeader/>   
        </div>
        
    );
}

function Heading(){
    const top_heading = 'React Course TaskOPedia';
    return (
        <div className="pt-3 py-1 pl-2" style={{backgroundColor:"black"}}>
            <img src={logo} style={{height:"35px", verticalAlign:"top"}} alt="logo.png"></img>
           <span className="h2 pt-4 text-white-50">{top_heading}</span>
        </div>
    );
}

function SubHeader(){
    return (
        <p style={SubHeaderStyle} className="text-center">This will be an exciting course!</p>
    );
}

const SubHeaderStyle =
{
    color: 'blueviolet',
    backgroundColor: 'lightgray'
};

export default Header;