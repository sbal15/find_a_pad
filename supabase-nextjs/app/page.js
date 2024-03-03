import AuthForm from './auth-form'
import './mainstyle.css'

export default function Home() {
    const spacing = 10;
    return (
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className="parallax">
            <div className="text-center">
                <br />
                <br />
                <br />
                    <AuthForm />
                <br />
                <h1>Find A Pad</h1>
            </div>

            <img src="/images/arrow.png" alt="Arrow" width="540" height="289"/>
            {/* <Image src="/images/arrow.png" className="center" width={540} height={289} style={{marginRight: spacing + 'em'}} /> */}
        </div>

        <div style={{height: '1150px', backgroundColor: 'white', fontSize: '24px', color: 'white'}}>
            <br /> <br /> <br />
            <h2>About Us</h2>
            <br />
            <img src="/images/photo3.jpg" alt="Arrow" width="400" height="600" />
            <img src="/images/photo4.jpg" alt="Arrow" width="400" height="600" />
            <img src="/images/photo2.jpg" alt="Arrow" width="400" height="600" />

            <br /><br /><br /><br />

            <div className="parallax2">
                <div className="text-center">
                </div>
            </div>
            
            <div style={{height: '1150px', backgroundColor: 'white', fontSize: '24px', color: 'white'}}>
                <br /><br /><br />
                <br />
                <img src="/images/b&w1.jpg" alt="Arrow" width="400" height="600" />
                <img src="/images/b&w2.jpg" alt="Arrow" width="400" height="600" />
                <img src="/images/b&w3.jpg" alt="Arrow" width="400" height="600" />
            </div>
        </div>
    </div>
  )
}

