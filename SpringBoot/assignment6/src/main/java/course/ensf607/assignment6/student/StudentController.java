package course.ensf607.assignment6.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import course.ensf607.assignment6.course.Course;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    public void addNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(student);
    }

    @GetMapping("/{studentId}")
    public List<String> getStudentEnrollments(@PathVariable Long studentId) {
        Student selectedStudent = studentService.getStudentById(studentId);
        Set<Course> courseList = selectedStudent.getSubjects();
        List<String> studentCourses = new ArrayList<String>();
        for (Course c : courseList) {
            studentCourses.add(c.getName());
        }
        return studentCourses;

    }
}
