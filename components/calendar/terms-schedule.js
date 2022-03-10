import React from 'react';

import Table from "react-bootstrap/Table";

const FirstTermCalendar = () => {

    return (
        <Table bordered hover>
            <thead>
            <tr>
                <th className={'text-uppercase'}>Day</th>
                <th className={'text-uppercase'}>Date/time</th>
                <th className={'text-uppercase'}>Activities</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'text-uppercase'}>Thursday</td>
                <td>16/09/2021<br/>10.00AM - 4.00PM</td>
                <td>Resumption of JSS1, other new students and prefects</td>
            </tr>
            <tr>
                <td className={'text-uppercase'}>Friday</td>
                <td>17/09/2021</td>
                <td>Orientation for all new students</td>
            </tr>
            <tr>
                <td className={'text-uppercase'}>Saturday</td>
                <td>18/09/2021<br/>9.00AM - 12.30PM<br/>1.00PM - 5.00PM</td>
                <td>Resumption for returning students<br/>JSS 2 and 3<br/>SS 1, 2 & 3</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>23/10/2021 - <br/>28/10/2021</td>
                <td>Continuous assessments (CA)</td>
            </tr>
            <tr>
                <td className={'text-uppercase'}>Saturday</td>
                <td>30/10/2021<br/>10.00AM - 3.00PM<br/>3.00PM - 5.00PM</td>
                <td>&nbsp;<br/>Open day<br/>Visiting day</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>07/12/2021 - <br/>17/12/2021</td>
                <td>First term examination</td>
            </tr>
            <tr>
                <td className={'text-uppercase'}>Saturday</td>
                <td>18/12/2021</td>
                <td>Students leave for vacation</td>
            </tr>
            </tbody>
        </Table>
    );
};

export const SecondTermCalendar = () => {
    return (
        <Table bordered hover>
            <thead>
            <tr>
                <th>DATE</th>
                <th>EVENT</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>11/01/2020</td>
                <td>RESUMPTION FOR 2ND TERM</td>
            </tr>
            <tr>
                <td>8/02/2020</td>
                <td>CFC ENTRANCE EXAMINATION TO JS1</td>
            </tr>
            <tr>
                <td>15/02/2020</td>
                <td>OPEN / VISITING DAY</td>
            </tr>
            <tr>
                <td>18/02/2020 – 21/02/2020</td>
                <td>CA TESTS</td>
            </tr>
            <tr>
                <td>17/02/2020 – 28/02/2020</td>
                <td>MOCK EXAMINATION FOR SS3 STUDENTS</td>
            </tr>
            <tr>
                <td>28/02/2020 – 1/03/2020</td>
                <td>SCIENCE WEEK</td>
            </tr>
            <tr>
                <td>7/03/2020</td>
                <td>INTER-HOUSE SPORT COMPETITION / VISITING DAY</td>
            </tr>
            <tr>
                <td>14/03/2020</td>
                <td>CFC ENTRANCE EXAMINATION TO JS1</td>
            </tr>
            <tr>
                <td>21/03/2020</td>
                <td>ODUN OBA (KING) YORUBA FESTIVAL</td>
            </tr>
            <tr>
                <td>31/03/2020 – 7/04/2020</td>
                <td>END OF 2ND TERM EXAMINATION</td>
            </tr>
            <tr>
                <td>8/04/2020</td>
                <td>VACATION FOR EASTER</td>
            </tr>
            <tr>
                <td>9/04/2020 – 24/04/2020</td>
                <td>EASTER HOLIDAY FOR JS1, JS2, SS1 & SS2</td>
            </tr>
            <tr>
                <td>14/04/2020 – 24/04/2020</td>
                <td>EXTENSION FOR JS3 & SS3 STUDENTS</td>
            </tr>
            <tr>
                <td>25/04/2020</td>
                <td>RESUMPTION OF JS1, JS2, SS1& SS2 STUDENTS FOR 3RD TERM</td>
            </tr>
            <tr>
                <td>25/04/2020 – 25/07/2020</td>
                <td>3RD TERM</td>
            </tr>
            </tbody>
        </Table>
    );
};

export const ThirdTermCalendar = () => {

    return (
        <>
        </>
    );
};

export default FirstTermCalendar;
