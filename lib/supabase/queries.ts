import { SupabaseClient } from '@supabase/supabase-js';

export const getProducts = async (supabase: SupabaseClient) => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
        throw error;
    }
    return data;
};

export const getProduct = async (supabase: SupabaseClient, productId: number) => {
    const { data, error } = await supabase.from('products').select('*').eq('id', productId).maybeSingle();
    if (error) {
        throw error;
    }
    return data || null;
};


export const getUserById = async (supabase: SupabaseClient, userId: number) => {
    const { data, error } = await supabase
        .from('users')
        .select('id, first_name, logo, products(*)')
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
        .select('id, first_name, logo, products(*)')
        .limit(4); // Limite à 4 utilisateurs
    if (error) {
        throw error;
    }
    return data.map((user) => ({
        user: {
            id: user.id,
            first_name: user.first_name,
            logo: user.logo,
        },
        products: user.products,
    }));
};





