import React from 'react';
import axios from 'axios';
export default class VisitorDetails extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            apptid:0,firstname:"",lastname:"",purpose:"",visitortype:"",typeofid:"",
            idno:0,dateofvisit:"",vechicleno:"",entrytime:"",exittime:"",
            empid:"",deptid:0,buildingid:0,gadgettype:"",gadgetno:""
           }​​​​​​​​;
    }
    visitors=(event)=>
     {​​​​​​​​
        visitordetail={​​​​​​​​
        FirstName:this.state.firstname,
        LastName:this.state.lastname,
        IDType:this.state.typeofid,
        Idno:this.state.idno,
        VisitorType:this.state.visitortype,
        Purpose:this.state.company,
        DateOfVisit:this.state.dateofvisit,     
        EntryTime:this.state.entrytime,
        ExitTime:this.state.exittime,
        EmployeeID:this.state.empid,
        DeptId:this.state.deptid,
        BuildingID:this.state.buildingid,
        VehicleNumber:this.state.vechicleno,
        GadgetType:this.state.gadgettype,
        GadgetNumbers:this.state.gadetno
            }​​​​​​​​;
        console.log(visitordetail.ApptID+","+visitordetail.FirstName+","+visitordetail.LastName+","
        +visitordetail.Company+","+visitordetail.IDType+","+visitordetail.IdNo+","+visitordetail.VechicleNo+","
        +visitordetail.EntryTime+","+visitordetail.EntryTime+","+visitordetail.EmpId+","+visitordetail.DeptId+","
        +visitordetail.GadgetType+","+visitordetail.GadgetNo+","+visitordetail.BuildingId);
        axios.post('http://localhost:1057/api/VisitorRegistration/AddVisitor',visitordetail).then(r=>{​​​​​​​​
        if(r)
        {​​​​​​​​
            console.log(r.data);
            this.setState({apptid:r.data});
            alert('Data Inserted');
            }​​​​​​​​
        }​​​​​​​​);
    }​​​​​​​​
    GetData=(event)=>
    {​​​​​​​​
        this.setState({​​​​​​​​[event.target.name]:event.target.value}​​​​​​​​);
    }​​​​​​​​
    render()
    {
        return(
                <form>
<h1>Visitor Details</h1>
<table border="2" class="table table-hover table-stripped">
<tbody>
 <tr>
<td>Enter FirstName</td>
<td><input type="text" name="firstname" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Enter First Name"/></td>
</tr>
<tr>
<td>Enter LastName:</td>
<td><input type="text" name="lastname" onChange={​​​​​​​​this.GetData}​​​​​​​​ placeholder="Enter Last Name"required/></td>
</tr>
<tr>
<td>Type Of Id</td>
<td><input type="text" name="typeofid" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Type Of ID"/></td>
</tr>
<tr>
<td>Enter Id No</td>
<td><input type="text" name="idno" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Enter Id No"/></td>
</tr>
<tr>
<td>Visitor Type</td>
<td><input type="text" name="visitortype" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Visitor Type"/></td>
</tr>
<tr>
<td>Enter Purpose Of Visit</td>
<td><input type="text" name="purpose" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Purpose oF Visit"/></td>
</tr>
<tr>
<td>Select Visit Date</td>
<td><input type="date" name="dateofvisit" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Select Visit Date"/></td>
</tr>
<tr>
<td>Enter EntryTime</td>
<td><input type="time" name="entrytime" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Entry Time"/></td>
</tr>
<tr>
<td>Enter ExitTime</td>
<td><input type="text" name="exittime" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Enter ExitTime"/></td>
</tr>
<tr>
<td>Enter Employee Id</td>
<td><input type="text" name="empid" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Enter Employee ID"/></td>
</tr>
<tr>
<td>Enter Department Id</td>
<td><input type="text" name="deptid" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Enter Department Id"/></td>
</tr>
<tr>
<td>Enter Building Id</td>
<td><input type="text" name="buildingid" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Enter Building Id"/></td>
</tr>
<tr>
<td>Enter Vechicle No</td>
<td><input type="text" name="vehicleno" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Enter Vechicle No"/></td>
</tr>
<tr>
<td>Enter GadgetType</td>
<td><select name="gadgettype" onChange={​​​​​​​​this.GetData}>
    <option value="">Select</option>
    <option value="Laptop">Laptopt</option>
    <option value="USB Drive">USB Drive</option>
    <option value="Smart Phones">Smart Phones</option>
    <option value="Others">Others</option>
    </select>
</td>
</tr>
<tr>
<td>Enter Gadget No</td>
<td><input type="text" name="gadgetno" onChange={​​​​​​​​this.GetData} ​​​​​​​​placeholder="Enter Nadget No"/></td>
</tr>
<tr>
<td><input type="button" onClick={​​​​​​​​this.visitors} ​​​​​​​​class="btn btn-success" value="Insert"/></td>
<td><input type="reset" class="btn btn-danger"value="Cancel"/></td>
</tr>
</tbody>
</table>
</form>
     );
    }
}
