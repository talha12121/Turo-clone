import "./index.css"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function Faqsec(){
    return(
     <div>
       <div className="backdiv1"  >
     <div className="main-heading1 sub-heading">
     Frequently asked questions
     </div>
     </div>
    <div className="Faqdiv">
        <Row>
            <Col lg={6} md={12} sm={12} xs={12}><Accordion  flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="acc-heading">What do I need to book a car on Turo?</Accordion.Header>
        <Accordion.Body>
        To book a car on Turo, you must create a Turo account, be 18 years old or older in the US, 21 years old or older in the UK, 23 years old or older in Canada, have a valid driver’s license, and get approved to drive on Turo. When you’re booking your first trip, you’ll go through a quick approval process by entering your driver’s license and some other information. In most cases, you’ll get approved immediately, and you’ll be set for all future road trips, day trips, and business trips!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="acc-heading">Do I need my own insurance?</Accordion.Header>
        <Accordion.Body>
        No, you don’t need personal insurance coverage to book a car on Turo.

In the US, any personal insurance you may have that covers damage to the host’s vehicle would kick in before your Turo protection plan, except in limited situations for trips booked in Maryland. When booking a car in the US, you’ll choose between three protection plans — Premier, Standard, or Minimum — to get the level of coverage that’s right for you. With each plan, you’re covered with third-party automobile liability insurance provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company — $750,000 for the Premier plan.*
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="acc-heading">Can other people drive a car that I booked?</Accordion.Header>
        <Accordion.Body>
        Yes, multiple guests can drive the car you book on Turo, as long as they are all approved to drive. The primary driver (whoever booked the car) can add additional drivers with no fees or additional charges. Only the primary driver can request to add drivers; Turo hosts cannot do it for you. We encourage you to request to add additional drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className="acc-heading">What is the cancellation policy on Turo?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    
    
    </Col>
            <Col lg={6} md={12} sm={12} xs={12}><Accordion  flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="acc-heading">What happens if I have an accident?</Accordion.Header>
        <Accordion.Body>
        If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available 24/7. We’ll make sure you’re safe, then help you get back on your way.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="acc-heading">Can I get my car delivered to me?</Accordion.Header>
        <Accordion.Body>
        Yes, many hosts offer delivery to travel hubs like airports, train stations, and hotels, or to custom delivery locations. There are cars available on Turo at convenient locations near hundreds of airports. Skip the rental counter and have your car delivered for pickup and return at your hotel or vacation rental, or nearby location, to save time and hassle on your weekend getaway or family vacation. Some hosts offer free delivery, while others set their own delivery fee.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="acc-heading">How do I get discounts when booking a car?</Accordion.Header>
        <Accordion.Body>
        Many Turo hosts offer discounted prices for weekly and monthly trips, as well as “early bird” discounts for trips booked a week or more in advance. Get the best deals and lowest rates possible on everything from cars to SUVs by booking longer trips, at least a week in advance.*

On your Account page, make sure you’ve checked the box to receive email notifications, and enable push notifications from the Turo app in your phone settings — we’ll send you occasional promo codes, discounts, and deals!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className="acc-heading">What are the cleaning and safety policies on Turo?</Accordion.Header>
        <Accordion.Body>
        Under the enhanced cleaning policy, hosts are required to clean and disinfect their vehicles thoroughly before every trip, so you can feel safe and comfortable behind the wheel. Turo hosts have access to training materials on enhanced safety measures and cleaning practices to help prevent the spread of COVID-19 or other viruses.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion></Col>
        </Row>
    </div>
     </div>
     
    )
   }
   export default Faqsec;