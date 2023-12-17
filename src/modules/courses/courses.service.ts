import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
	private courses: Course[] = [
		{
			id: 1,
			name: 'NestJS Framework Fundamentals',
			description: 'NestJS Framework Fundamentals',
			tags: ['nodejs', 'nestjs', 'javascript']
		}
	];

	findAll(): Course[] {
		return this.courses;
	}

	findOne(id: string): Course {
		const courseFound = this.courses
			.find((course) => (course.id === Number(id)));

		if (!courseFound) {
			throw new HttpException(
				`Course ID ${id} not found`,
				HttpStatus.NOT_FOUND
			);
		}

		return courseFound;
	}

	create(createCourseDto: any) {
		this.courses.push(createCourseDto);
		return createCourseDto;
	}

	update(id: string, updateCourseDto: any) {
		const indexCourse = this.courses
			.findIndex(course => course.id === Number(id));

		this.courses[indexCourse] = updateCourseDto;
	}

	remove(id: string) {
		const indexCourse = this.courses
			.findIndex(course => course.id === Number(id));

		if (indexCourse >= 0) {
			this.courses.splice(indexCourse, 1);
		}
	}
}
