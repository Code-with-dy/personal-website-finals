import { Injectable, BadRequestException } from '@nestjs/common';
import { SupabaseService } from '../supabase.service';

@Injectable()
export class CommentsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async create(name: string, message: string) {
    if (!name?.trim() || !message?.trim()) {
      throw new BadRequestException('Name and message are required');
    }
    const { data, error } = await this.supabaseService
      .getClient()
      .from('comments')
      .insert([{ name: name.trim(), message: message.trim() }])
      .select()
      .single();
    if (error) throw new BadRequestException(error.message);
    return data;
  }
}