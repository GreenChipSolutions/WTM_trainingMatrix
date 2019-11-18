import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/context';
import { SqlDataSource } from '../datasources';

/**
 * OpenAPI response for ping()
 */
const COURSE_RESPONSE: ResponseObject = {
  description: 'Courses',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          courseId: {type: 'int'},
          courseType: {type: 'string'},
          courseTitle: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to get all courses
 */
export class CourseController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/courses', {
    responses: {
      '200': COURSE_RESPONSE,
    },
  })
  courseList(): object {
    let res = SqlDataSource.call
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }
}
