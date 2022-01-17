<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;
// use App\User;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function admin(User $user)
    {
        return $user->role === 'Admin';
    }

    public function petugas(User $user)
    {
        return $user->role === 'Petugas';
    }
}
