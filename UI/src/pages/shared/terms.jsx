import React from "react";
import '../../css/style.css'
const TermConditions = () => {
  return (
    <div className="container-fluid p-4 bg-purple-100">
      <div className="card border-dark shadow p-3 rounded bg-purple-100">
        <div className="card-body">
          <div className="row p-4">
            <div className="col"></div>
            <div className="col flex justify-center">
              <h1 className="card-title font-bold">
                BIRTHDAY EVENT TERMS AND CONDITIONS
              </h1>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col p-4">
              <p className="card-text text-dark px-2">
                These Terms and Conditions ("Terms") constitute a legally
                binding agreement between you ("Participant" or "you") and our
                company governing your participation in the Party Event
                ("Event"). By registering or participating in the Event, you
                agree to be bound by these Terms. If you do not agree to these
                Terms, please refrain from participating in the Event.
              </p>
              <div className="row m-2  pb-[5px]">
                <div className="row m-2 ">
                  <p className="text-xl font-semibold">
                    1. Registration and Eligibility
                  </p>
                  <p>
                    By participating in the Event, you affirm that you have
                    read, understood, and accepted these Terms. You must be at
                    least 18 years old or the legal age of majority in your
                    jurisdiction to participate in the Event. If you are
                    registering for the Event on behalf of a group or
                    organization, you represent and warrant that you have the
                    authority to bind that group or organization to these Terms,
                    and "you" in these Terms refers to both you individually and
                    the group or organization.
                  </p>
                </div>
                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">
                    2. Event Conduct and Behavior
                  </p>
                  <p>
                    Participants are expected to conduct themselves in a
                    respectful and appropriate manner during the Event. Any form
                    of harassment, discrimination, or disruptive behavior will
                    not be tolerated and may result in expulsion from the Event
                    venue.
                  </p>
                </div>
                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">3. Dress Code</p>
                  <p>
                    Participants must adhere to the specified dress code for the
                    event. Failure to comply may result in denial of entry.
                  </p>
                </div>

                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">
                    4. Alcohol and Substance Use
                  </p>
                  <p>
                    Consumption of alcohol and illegal substances is strictly
                    prohibited at the event venue. Any violation will result in
                    immediate removal from the event.
                  </p>
                </div>

                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">5. Security Measures</p>
                  <p>
                    Participants are subject to security checks upon entry. Any
                    refusal to comply with security measures may lead to denial
                    of entry or removal from the event.
                  </p>
                </div>

                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">
                    6. Photography and Recording
                  </p>
                  <p>
                    Photography and recording of any kind, including but not
                    limited to audio and video, are strictly prohibited without
                    prior authorization from event organizers.
                  </p>
                </div>

                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">7. Lost Items</p>
                  <p>
                    The event organizers are not responsible for any lost or
                    stolen items during the event. Participants are advised to
                    keep their belongings secure at all times.
                  </p>
                </div>

                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">
                    8. Emergency Procedures
                  </p>
                  <p>
                    Participants must follow instructions from event staff in
                    case of emergencies. Emergency exits and evacuation routes
                    are clearly marked and should be used if necessary.
                  </p>
                </div>

                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">9. Liability Waiver</p>
                  <p>
                    By participating in the event, participants agree to waive
                    any liability against event organizers for injuries or
                    damages incurred during the event.
                  </p>
                </div>

                <div className="row m-2 pb-[5px]">
                  <p className="text-xl font-semibold">
                    10. Termination of Participation
                  </p>
                  <p>
                    Event organizers reserve the right to terminate the
                    participation of any individual who violates these terms or
                    engages in disruptive behavior, without refund or
                    compensation.
                  </p>
                </div>

                {/* Additional conditions converted similarly */}
                <div className="row mt-4">
                  <p>
                    <strong>
                      By participating in the Party Event, you acknowledge and
                      agree to abide by these Terms and Conditions. Failure to
                      comply with these terms may result in removal from the
                      Event. We reserve the right to modify these Terms at any
                      time, and the most recent version will be communicated to
                      all registered participants. Your continued participation
                      in the Event constitutes acceptance of the modified Terms.
                    </strong>
                  </p>
                </div>
                <div className="row mt-8 flex justify-center">
                  <button className="bg-green-500 p-2 mx-8 rounded w-36 hover:bg-green-800">
                    Accept
                  </button>
                  <button className="bg-red-500 hover:bg-red-800 p-2 rounded w-36">
                    Decline
                  </button>
                  <br></br>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default TermConditions;
