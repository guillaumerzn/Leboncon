import { SupabaseClient } from '@supabase/supabase-js';

export const getProducts = async (supabase: SupabaseClient) => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
        throw error;
    }
    return data;
};

export const getProduct = async (supabase: SupabaseClient, productId: number) => {
    const { data, error } = await supabase
        .from('products')
        .select('*, user:users(first_name, logo)')
        .eq('id', productId)
        .maybeSingle();
    if (error) {
        throw error;
    }
    return data || null;
}

export const getUserById = async (supabase: SupabaseClient, userId: string) => {
    const { data, error } = await supabase
        .from('users')
        .select('id, first_name, last_name, logo')
        .eq('id', userId)
        .single();
    if (error) {
        throw error;
    }
    return data;
};

export const getUsersWithProducts = async (supabase: SupabaseClient) => {
    const { data, error } = await supabase
        .from('users')
        .select('id, first_name, last_name, logo, products(*)')
        .limit(4); // Limite à 4 utilisateurs
    if (error) {
        console.error("Error fetching users with products:", error);
        throw error;
    }
    return data.map((user) => ({
        user: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            logo: user.logo,
        },
        products: user.products,
    }));
};
