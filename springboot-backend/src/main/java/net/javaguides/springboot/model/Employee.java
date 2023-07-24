package net.javaguides.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

   
   //private long id;
    @Id
  //  @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "EmployeeID")
    private long EmployeeID;
    
    @Column(name = "EmployeeName")
    private String EmployeeName;

    @Column(name = "Department")
    private String Department;

//    public long getId() {
//		return id;
//	}

//	public void setId(long id) {
//		this.id = id;
//	}

	public long getEmployeeID() {
		return EmployeeID;
	}

	public void setEmployeeID(long employeeID) {
		EmployeeID = employeeID;
	}

	public String getEmployeeName() {
		return EmployeeName;
	}

	public void setEmployeeName(String employeeName) {
		EmployeeName = employeeName;
	}

	public String getDepartment() {
		return Department;
	}

	public void setDepartment(String department) {
		Department = department;
	}

	public String getEmailId() {
		return EmailId;
	}

	public void setEmailId(String emailId) {
		EmailId = emailId;
	}

	public String getDOJ() {
		return DOJ;
	}

	public void setDOJ(String dOJ) {
		DOJ = dOJ;
	}

	@Column(name = "EmailId")
    private String EmailId;
    
    @Column(name = "DOJ")
    private String DOJ;

	
}
