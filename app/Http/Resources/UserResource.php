<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'fname' => $this->fname,
            'nname' => $this->nname,
            'oname' => $this->oname,
        ];
    }
}
