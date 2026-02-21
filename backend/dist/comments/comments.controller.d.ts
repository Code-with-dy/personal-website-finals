import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    findAll(): Promise<any[]>;
    create(body: {
        name: string;
        message: string;
    }): Promise<any>;
}
