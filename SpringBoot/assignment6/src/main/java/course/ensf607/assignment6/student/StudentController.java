package course.ensf607.assignment6.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import course.ensf607.assignment6.course.Course;
import course.ensf607.assignment6.section.Section;

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

    @GetMapping("/enrollments/{UCID}")
    public List<List<String>> getStudentEnrollments(@PathVariable String UCID) {
        Student selectedStudent = studentService.getStudentByUCID(UCID);
        Set<Section> sectionList = selectedStudent.getSubjects();
        List<List<String>> studentCourses = new ArrayList<>();
        
        for (Section c : sectionList) {
            List<String> courseSection = new ArrayList<>();
            courseSection.add(c.getCourse().iterator().next().getName());
            courseSection.add(c.getSectionNum());
            studentCourses.add(courseSection);
            
        }
        
        return studentCourses;
    }

    @GetMapping("/specific/{UCID}")
    public Student getStudent(@PathVariable String UCID) {
        Student selectedStudent = studentService.getStudentByUCID(UCID);
        return selectedStudent;
    }
}
