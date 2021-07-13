export class Todo {
	id: number;
	Done: boolean;
	Task: string;
	DueDate: moment.Moment;


	constructor(id: number, isDone: boolean, task: string, duedate: moment.Moment) {
		this.id = id;
		this.Done = isDone;
		this.Task = task;
		this.DueDate = duedate;
	}
}
