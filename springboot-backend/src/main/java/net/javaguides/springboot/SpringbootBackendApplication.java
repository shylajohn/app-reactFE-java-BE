package net.javaguides.springboot;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
	Employee employee = new Employee();
	employee.setEmployeeID(1);
	employee.setEmployeeName("shyla");
	employee.setDepartment("training");
	employee.setEmailId("shyla@gmail.com");
	employee.setDOJ("21/11/1990");
	employeeRepository.save(employee);
//
	Employee employee1 = new Employee();
	employee1.setEmployeeID(2);
	employee1.setEmployeeName("arvind");
	employee1.setDepartment("training");
	employee1.setEmailId("shyla@gmail.com");
	employee1.setDOJ("21/11/1990");
	employeeRepository.save(employee1);
	}
}
