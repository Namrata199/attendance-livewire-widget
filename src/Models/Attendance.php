<?php

namespace Namratalohani\AttendanceLivewireWidget\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Attendance extends Model
{
    use HasFactory;

    protected $guarded = []; // No guarded fields, allow mass assignment

    /**
     * Get the user associated with the attendance record.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
