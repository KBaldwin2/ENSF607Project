package course.ensf607.assignment6.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import course.ensf607.assignment6.course.Course;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.atomic.LongAdder;

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

    @GetMapping("/enrollments/{UCID}")
    public List<String> getStudentEnrollments(@PathVariable String UCID) {
        Student selectedStudent = studentService.getStudentByUCID(UCID);
        Set<Course> courseList = selectedStudent.getSubjects();
        List<String> studentCourses = new ArrayList<String>();
        for (Course c : courseList) {
            studentCourses.add(c.getName());
        }
        return studentCourses;
    }

    @GetMapping("/specific/{UCID}")
    public Student getStudent(@PathVariable String UCID) {
        Student selectedStudent = studentService.getStudentByUCID(UCID);
        return selectedStudent;
    }
}
