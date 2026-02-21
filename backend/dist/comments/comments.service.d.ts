import { SupabaseService } from '../supabase.service';
export declare class CommentsService {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    findAll(): Promise<any[]>;
    create(name: string, message: string): Promise<any>;
}
