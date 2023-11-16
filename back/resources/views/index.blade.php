<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Onomatopeias</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body class="">
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Pandin</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">List</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
    <main>
        <div class="container">
            <form action="{{ route('getList') }}" method="POST">
                @csrf
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input id="name" name="name" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <input id="description" name="description" type="text" class="form-control">
                </div>
                <div class="tags">
                    <div class="tags-list">
                        <div class="search-form" role="search">
                            <input id="tagSearchInput1" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        </div>
                        <select id="tagSelect1" class="form-select" multiple aria-label="Multiple select example">
                        </select>
                    </div>
                    <div class="tags-input">
                        <div class="search-form" role="search">
                            <input id="tagSearchInput2" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        </div>
                        <select id="tagSelect2" class="form-select" multiple aria-label="Multiple select example">
                        </select>
                    </div>
                </div>
                <button id="sendForm" type="submit" class="btn btn-primary">Atualizar</button>
            </form>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
